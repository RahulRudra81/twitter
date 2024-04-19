import mongoose from "mongoose";

const dbStart = async (url) => {
  await mongoose.connect(url);
  console.log("Connected to database");
};

export default dbStart;
