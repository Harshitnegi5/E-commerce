import express from "express";
import cors from "cors"
import "dotenv/config"

const app = express() // app config
const port = process.env.PORT || 4000

// middlewares

app.use(express.json())
app.use(cors())



//Api endpoints

app.get("/",(req,res)=>{
    res.setEncoding("Api Working")
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
    
})