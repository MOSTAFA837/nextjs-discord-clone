import { auth } from "@clerk/nextjs";
import { connectToDatabase } from "./mongoose";
import { Profile } from "@/models/profile.model";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) return null;

  connectToDatabase();
  const profile = await Profile.findOne({ userId });

  return profile;
};
