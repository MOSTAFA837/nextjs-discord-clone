import { Schema, model, models } from "mongoose";

const ProfileSchema = new Schema(
  {
    userId: { type: String, unique: true },
    name: { type: String },
    imageUrl: { type: String },
    email: { type: String },
    servers: [{ type: Schema.Types.ObjectId, ref: "Server" }],
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
    channels: [{ type: Schema.Types.ObjectId, ref: "Channel" }],
  },
  { timestamps: true }
);

export const Profile = models.Profile || model("Profile", ProfileSchema);
