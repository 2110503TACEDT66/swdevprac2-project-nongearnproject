import { dbConnect } from "@/db/dbConnect";
import Booking from "@/db/models/Booking";
import { NextResponse } from "next/server";

export const GET =  async () => {
    try{
        await dbConnect();
        const booking = await Booking.find();
        return NextResponse.json({data:booking})
    }catch(err){
        return NextResponse.json({error: err})
    }
}