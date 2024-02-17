"use server";

import { Server } from "@/models/server.model";

export async function getServerById(profileId: string) {
  const server = await Server.findOne({ profileId: profileId });
  return server;
}
