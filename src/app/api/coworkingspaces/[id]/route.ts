import { dbConnect } from "@/db/dbConnect";
import CoWorkingSpace from "@/db/models/CoWorkingSpace";
import { NextRequest, NextResponse } from "next/server";

export const GET =  async (_: NextRequest, { params }: { params: { id: string } }) => {
    try{
        await dbConnect();
        const coworkingspace = await CoWorkingSpace.findById(params.id);
        console.log(params)
        return NextResponse.json({data:coworkingspace})
    }catch(err){
        return NextResponse.json({error: err})
    }
}