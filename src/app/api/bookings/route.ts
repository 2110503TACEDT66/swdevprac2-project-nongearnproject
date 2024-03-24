import { dbConnect } from "@/db/dbConnect";
import Booking from "@/db/models/Booking";
import { NextRequest, NextResponse } from "next/server";

export const GET =  async (_: NextRequest, { params }: { params: { id: string } }) => {
    try{
        await dbConnect();
        const booking = await Booking.findById(params.id);
        console.log(params)
        return NextResponse.json({data:booking})
    }catch(err){
        return NextResponse.json({error: err})
    }
}