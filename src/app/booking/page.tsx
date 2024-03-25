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

export default function Booking() {

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(pickupDate) {
            const item:BookingItem = {
                name: fname,
                surname: lname,
                id: citizenid,
                coworkingspace: pickupLocation,
                bookDate: dayjs(pickupDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    const [fname, setFname] = useState<string>("")
    const [lname, setLname] = useState<string>("")
    const [citizenid, setCitizenId] = useState<string>("")
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [pickupLocation, setPickupLocation] = useState<string>('')

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-6">
            <div className="text-6xl text-center">CoWorkingSpace Booking</div>

            <div className="flex flex-col space-y-6 p-6">
                <TextField variant="standard" name="Name" label="Name"
                className="h-[2em] w-[200px]" value={fname}
                onChange={(e)=>setFname(e.target.value)}></TextField>
                <TextField variant="standard" name="Lastname" label="Lastname"
                className="h-[2em] w-[200px]"value={lname}
                onChange={(e)=>setLname(e.target.value)}></TextField>
                <TextField variant="standard" name="Citizen ID" label="Citizen ID"
                className="h-[2em] w-[200px]" value={citizenid}
                onChange={(e)=>setCitizenId(e.target.value)}></TextField>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Booking Date and Location</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}
                onLocationChange={(value:string)=>{setPickupLocation(value)}}/>
            </div>

            <button name="Book Vaccine" className="block rounded-md bg-sky-600 
            hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={makeBooking}>
                Book CoWorkingSpace
            </button>
        </main>
    );
}
