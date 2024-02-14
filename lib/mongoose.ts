import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}
