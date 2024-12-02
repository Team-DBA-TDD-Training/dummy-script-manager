import mongoose from "mongoose";

/**
 * Connect to MongoDB
 * @param {string} uri - The MongoDB connection string
 */
const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("🗄️  MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
