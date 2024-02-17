import { Schema, model, models } from "mongoose";

const MemberSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["ADMIN", "MODERATOR", "GUEST"],
      default: "GUEST",
    },
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    serverId: { type: Schema.Types.ObjectId, ref: "Server" },
  },
  { timestamps: true }
);

export const Member = models.Member || model("Member", MemberSchema);
