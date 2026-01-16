import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRegistration extends Document {
  name: string;
  district: string;
  mobile: string;
  email?: string;
  userAgent?: string;
  device?: string;
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const RegistrationSchema: Schema<IRegistration> = new Schema(
  {
    name: {
      type: String,
      required: [true, "नाम आवश्यक है"],
      trim: true,
      minlength: [2, "नाम कम से कम 2 अक्षरों का होना चाहिए"],
      maxlength: [100, "नाम 100 अक्षरों से अधिक नहीं होना चाहिए"],
    },
    district: {
      type: String,
      required: [true, "जिला आवश्यक है"],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, "मोबाइल नंबर आवश्यक है"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "कृपया सही ईमेल पता दर्ज करें"],
    },
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
  },
  {
    timestamps: true,
  }
);

// Create index for faster queries
RegistrationSchema.index({ mobile: 1 });
RegistrationSchema.index({ district: 1 });
RegistrationSchema.index({ createdAt: -1 });

const Registration: Model<IRegistration> =
  mongoose.models.Registration || mongoose.model<IRegistration>("Registration", RegistrationSchema);

export default Registration;
