import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
  //To check if we have a connection to the database or if it's currently connected
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    console.log(`Connected to ${db.connection.name} database`);
  } catch (error) {
    console.error("Connection failed", error);
    process.exit(1);
  }
}
export default dbConnect;
