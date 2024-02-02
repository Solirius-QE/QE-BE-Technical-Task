import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    //  console.log(response);
    console.log("Mongo Connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
