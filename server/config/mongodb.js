import mongoose from "mongoose";
import "dotenv/config";

const connectDB= async ()=>{

    mongoose.connection.on("connected", () => console.log("Database connected"))
    // await mongoose.connect(`${process.env.MONGODB_URL}/mern-auth`);

    await mongoose.connect(process.env.MONGODB_URL, {
    dbName: "mern-auth",
});
}

export default connectDB;



