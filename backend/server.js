import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

const app = express() // app config
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares

app.use(express.json())
app.use(cors())



//Api endpoints

app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
    
})