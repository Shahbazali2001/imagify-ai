import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  if (!MONGO_URI) {
    console.error("MONGO_URI not found in environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);

    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err.message);
  });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected.");
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("Mongoose disconnected.");
  });
};

export default connectDB;
