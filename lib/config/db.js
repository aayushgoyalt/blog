import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Blog-app",
    });
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
