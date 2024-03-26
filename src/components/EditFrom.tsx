'use client'
import DateReserve from "./DateReserve";
import { useState } from "react";
import { Dayjs } from "dayjs";
import updateBooking from "@/libs/updateBooking";
import { useSession } from 'next-auth/react'
import Link from "next/link";

export default function EditFrom({id,book_date,username,coworkingspaceId,createdAt}: any) {

    const { data: session } = useSession()
    if(!session){  
        return null     
    }  
    const handleSubmit = async () => {
        console.log(session?.user.token, bookDate?.toString(), id)
        try {
            if (bookDate)
            await updateBooking(session.user.token, bookDate.toString(), id) 
        } catch(err) {
            console.log(err)
        }
    }
    const [bookDate, setBookDate] = useState<Dayjs|undefined>(book_date)
    const [bookLocation, setBookLocation] = useState<string>('')

    return (
            <div>
                <div className="flex justify-between item-center">
                    <h1 className="font-bold py-10 text-2xl">
                        Update Booking {id}
                    </h1>
                </div>
                <div className="w-[100%] flex flex-col items-center space-y-4 mt-6">
                    <div className="w-fit space-y-2">
                        <div className="text-md text-left text-gray-600">Booking Date and Location</div>
                        <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}
                        onLocationChange={(value:string)=>{setBookLocation(value)}} Editpage={true}
                        />
                    </div>

                    <Link href={'/mybooking'}>
                        <button name="Book Vaccine" className="block rounded-md bg-sky-600 
                        hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={handleSubmit}>
                            Update Booking
                        </button>
                    </Link> 
                </div>
            </div>
    );
}