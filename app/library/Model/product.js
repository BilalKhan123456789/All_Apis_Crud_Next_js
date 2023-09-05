import mongoose from "mongoose";



const defineSchema =mongoose.Schema({
    rollno:Number,
    name:String,
    fname:String,
    education:String,
    email:String
})

if(mongoose.models['product']){
    delete mongoose.models['product']
}




export const database = mongoose.model("product",defineSchema)