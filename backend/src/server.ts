import dotenv from "dotenv";
import connectDB from "./config/connectDB";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_DB_URI;

if (!MONGO_URI) {
  console.error("MongoDB URI not found in environment variables");
  process.exit(1);
}

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
