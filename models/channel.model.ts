import { Schema, model, models } from "mongoose";

const ChannelSchema = new Schema(
  {
    name: { type: String },
    type: {
      type: String,
      enum: ["TEXT", "AUDIO", "VIDEO"],
      default: "TEXT",
    },
    profile: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    server: { type: Schema.Types.ObjectId, ref: "Server" },
  },
  { timestamps: true }
);

export const Channel = models.Channel || model("Channel", ChannelSchema);
