import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectdb } from "../../../library/db";
import { database } from "../../../library/Model/product";


export async function DELETE(request,content){

    
    const id = content.params.id
    console.log(id)


await mongoose.connect(connectdb).then(async(res)=>{
    console.log("delete Api Working")
})


const obj = { _id:id}


const filter = await database.deleteOne(obj)


return NextResponse.json({
    data:filter,
    message:'delete Api created',
    status:true
})


}


export async function PUT(request,content){


const data = await request.json()

const id = content.params.id



await mongoose.connect(connectdb).then(async (res)=>{
    console.log("Put Api Deleted")
})


const obj = {_id:id}


const filter = await database.findOneAndUpdate(obj,data)




return NextResponse.json({
    data:filter,
    message:"Put Api Created",
    status:true
})


}


export async function GET(request,content){

const id = content.params.id


await mongoose.connect(connectdb).then(async(res)=>{
    console.log("Get Single User Api Hit")
})

const filter = {_id:id}

const result = await database.findOne(filter)






return NextResponse.json({
    data:result,
    message:"Get Single User Data",
    status:true
})


}








