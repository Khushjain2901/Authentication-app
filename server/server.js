import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";


const app=express();
const port=process.env.PORT||4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

// API Endpoints
app.get('/',(req,res)=>res.send("API is working fine"));
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);

const startServer = async () => {
    await connectDB();
    app.listen(port,()=>console.log(`Server is running at port ${port}`));
};

startServer().catch((error) => {
    console.error("Failed to start server:", error);
    process.exitCode = 1;
});