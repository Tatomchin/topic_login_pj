import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
    }
    )
    console.log("Connect to MongoDB already !");
  } catch (error) {
    console.log("Fail to connect MongDB");
  }
}
