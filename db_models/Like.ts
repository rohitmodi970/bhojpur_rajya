import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILike extends Document {
  userAgent?: string;
  device?: string;
  ipAddress?: string;
  likeType: "support" | "share";
  metadata?: {
    platform?: string;
    browser?: string;
    os?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const LikeSchema: Schema<ILike> = new Schema(
  {
    userAgent: {
      type: String,
      trim: true,
    },
    device: {
      type: String,
      trim: true,
    },
    ipAddress: {
      type: String,
      trim: true,
    },
    likeType: {
      type: String,
      enum: ["support", "share"],
      required: true,
      default: "support",
    },
    metadata: {
      platform: String,
      browser: String,
      os: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for analytics
LikeSchema.index({ ipAddress: 1, likeType: 1 });
LikeSchema.index({ createdAt: -1 });
LikeSchema.index({ likeType: 1 });

const Like: Model<ILike> =
  mongoose.models.Like || mongoose.model<ILike>("Like", LikeSchema);

export default Like;
