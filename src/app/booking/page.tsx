'use client'
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import createBooking from "@/libs/createBooking";
import { create } from "domain";
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Booking() {

    const router = useRouter()

    const { data: session } = useSession()

    const addBooking = async () => {
        console.log(session?.user.token, bookDate?.toString(), bookLocation)
        try {
            if (bookDate && session)
            await createBooking(session.user.token, bookDate?.toString(), bookLocation) 
        } catch(err) {
            console.log(err)
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [bookLocation, setBookLocation] = useState<string>('')

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-6">
            <div className="text-6xl text-center">CoWorkingSpace Booking</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Booking Date and Location</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                onLocationChange={(value:string)=>{setBookLocation(value)}}/>
            </div>

            <Link href={
                    (bookDate && bookLocation) ? '/mybooking' : '/booking'
                }>
                <button name="Book Vaccine" className="block rounded-md bg-sky-600 
                hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                onClick={
                    (bookDate && bookLocation) ?
                    addBooking : ()=>{alert('Please select date and location')}
                    }>
                    Book CoWorkingSpace
                </button>
            </Link>
            
        </main>
    );
}
