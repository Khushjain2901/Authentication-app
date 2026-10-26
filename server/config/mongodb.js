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

// import mongoose from "mongoose";
// import "dotenv/config";
// import dns from "node:dns";
// import { error } from "node:console";

// const connectDB = async () => {
//   try {
//     console.log(error)
//      dns.setServers(["8.8.8.8", "1.1.1.1"]);
//     const conn = await mongoose.connect(process.env.MONGODB_URL, {
//       dbName: "mern-auth",
//     });

//     console.log(error)

//     console.log("MongoDB Connected" );
//   } catch (error) {
//     console.error("MongoDB Error:");
//     console.error(error);
//     process.exit(1);
//   }
// };

// export default connectDB;
