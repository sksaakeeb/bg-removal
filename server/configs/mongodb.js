import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to DB");
  });

  try {
    await mongoose.connect(`${process.env.MONGO_URI}/bg-removal`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
