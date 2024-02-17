import { currentProfile } from "@/lib/current-profile";
import { connectToDatabase } from "@/lib/mongoose";
import { Channel } from "@/models/channel.model";
import { Member } from "@/models/member.model";
import { Server } from "@/models/server.model";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const { name, imageUrl } = await req.json();

  const profile = await currentProfile();

  if (!profile) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  connectToDatabase();

  let server = await Server.create({
    name,
    imageUrl,
    inviteCode: uuidv4(),
    profileId: profile._id,
  });

  const channel = await Channel.create({
    name: "general",
    profileId: profile._id,
    serverId: server._id,
  });

  const member = await Member.create({
    profileId: profile._id,
    serverId: server._id,
    role: "ADMIN",
  });

  server = await Server.findByIdAndUpdate(server._id, {
    $push: {
      channels: channel._id,
      members: member._id,
    },
  });

  return NextResponse.json(server);
}
