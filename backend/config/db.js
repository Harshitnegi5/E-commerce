
import mongoose from "mongoose";

const connectDB = async () => {
   
     mongoose.connection.on("connected",()=>{
        console.log("DB Connected");
        
     })
    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`)
}


export default connectDB;