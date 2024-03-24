import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import { NextResponse } from "next/server";

export const GET =  async () => {
    try{
        await dbConnect();
        const user = await User.find();
        return NextResponse.json({data:user})
    }catch(err){
        return NextResponse.json({error: err})
    }
}