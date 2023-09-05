import { NextResponse } from "next/server"
import mongoose from 'mongoose'
import {connectdb} from '../../library/db'
import {database} from '../../library/Model/product'


export async function GET(){



await mongoose.connect(connectdb).then(async(res)=>[
    console.log("get api connect with Mongo_Db ")
])

const data = await database.find()


if(data==0){
    return NextResponse.json({
        data:"data Not found",
        status:false

    })

}else{

    return NextResponse.json({
        data:data,
        status:true

    })
}


}