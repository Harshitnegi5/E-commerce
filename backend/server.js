import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js";

const app = express() // app config
const port = process.env.PORT || 4000;
connectDB();

// middlewares

app.use(express.json())
app.use(cors())



//Api endpoints

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
    
})