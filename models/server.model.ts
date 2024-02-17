import { Schema, model, models } from "mongoose";

const ServerSchema = new Schema(
  {
    name: { type: String },
    imageUrl: { type: String },
    inviteCode: { type: String },
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
    channels: [{ type: Schema.Types.ObjectId, ref: "Channel" }],
  },
  { timestamps: true }
);

export const Server = models.Server || model("Server", ServerSchema);
