import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { connectToDatabase } from "./mongoose";
import { Profile } from "@/models/profile.model";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  connectToDatabase();

  const profile = await Profile.findOne({ userId: user.id });

  if (profile) {
    return profile;
  } else {
    const profile = await Profile.create({
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    });

    return profile;
  }
};
