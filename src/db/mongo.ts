import mongoose from "mongoose";

export async function connectMongoDb() {
  const mongoUri = process.env.MONGO_URI ?? "";
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.log("MongoDB not connected ❌", error);
    process.exit(1);
  }
}
