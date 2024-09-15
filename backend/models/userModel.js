import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    emai:{
        type:String,
        required:true
    },
    password:{
        
    }

})

export const userModel = mongoose.models.product || mongoose.model("user",userSchema)