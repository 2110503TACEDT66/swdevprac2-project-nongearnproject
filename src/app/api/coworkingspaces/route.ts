import { dbConnect } from "@/db/dbConnect";
import CoWorkingSpace from "@/db/models/CoWorkingSpace";
import { NextResponse } from "next/server";

export const GET =  async () => {
    try{
        await dbConnect();
        const coworkingspace = await CoWorkingSpace.find();
        return NextResponse.json({data:coworkingspace})
    }catch(err){
        return NextResponse.json({error: err})
    }
}