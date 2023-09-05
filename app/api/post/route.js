import {NextResponse} from 'next/server'
import {connectdb} from '../../library/db'
import {database} from '../../library/Model/product'
import mongoose from 'mongoose'

export async function POST(request){

const data = await request.json()


await mongoose.connect(connectdb).then(async(res)=>{
    console.log("post api connect")
})

const filter = database(data)

const res = filter.save()


return NextResponse.json({
    data:res,
    message:"Data Upload in dataBase",
    status:true
})


}