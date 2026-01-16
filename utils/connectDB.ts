// connectDB.ts
import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI || "";

const connectDB = async (): Promise<void> => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(MONGODB_URI, {
      // Remove deprecated options for newer mongoose versions
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Type assertion for options

    console.log("MongoDB connected successfully");
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error(" MongoDB connection error:", errorMessage);
    process.exit(1);
  }
};

export default connectDB;
