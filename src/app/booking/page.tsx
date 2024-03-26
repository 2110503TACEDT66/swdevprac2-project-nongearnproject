'use client'
import DateReserve from "@/components/DateReserve";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import createBooking from "@/libs/createBooking";
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

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
            Swal.fire({
                title: 'Error',
                text: 'Failed to book CoWorkingSpace. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [bookLocation, setBookLocation] = useState<string>('')

    return (
        
        <main className="w-[100%] flex flex-col items-center space-y-8 mt-10">
            <div className="text-5xl text-center font-bold text-indigo-600">Book Your CoWorkingSpace</div>            

            <div className="w-full max-w-md space-y-4 p-4 bg-gray-100 rounded-lg">
                <div className="text-lg text-gray-800 font-semibold">Choose Booking Date and Location</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                             onLocationChange={(value:string)=>{setBookLocation(value)}}/>
            </div>

            <button name="Book CoWorkingSpace" className={`w-full max-w-md rounded-md bg-indigo-600 
                                                        hover:bg-indigo-700 px-6 py-3 text-white font-semibold shadow-lg
                                                        ${!(bookDate && bookLocation) && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => {
                        if (bookDate && bookLocation) {
                            addBooking();
                        } else {
                            Swal.fire({
                                title: 'Warning',
                                text: 'Please fill in all fields',
                                icon: 'warning',
                                confirmButtonText: 'OK'
                            });
                        }
                    }}>
                Book CoWorkingSpace
            </button>
        </main>
    );
}
