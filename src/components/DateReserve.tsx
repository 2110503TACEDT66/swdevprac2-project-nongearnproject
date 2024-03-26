"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import getCoWorkingSpaces from "@/libs/getCoWorkingSpaces";
import { CoWorkingSpaceJson, CoWorkingSpaceItem } from "../../interface";

export default function DateReserve({onDateChange, onLocationChange}
    :{onDateChange:Function, onLocationChange:Function}) {
    
    const [coworkingspaceResponse, setCoWorkingSpaceResponse] = useState<CoWorkingSpaceJson | null>(null)

    useEffect(()=>{
        const fetchData = async () => {
            const coworkingspace = await getCoWorkingSpaces()
            setCoWorkingSpaceResponse(coworkingspace)
        }
        fetchData()
    }, [])



    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null);
    const [location, setLocation] = useState('');

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate} onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" id="hospital" value={location}
            onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                {
                coworkingspaceResponse?
                coworkingspaceResponse.data.map((cardItem:CoWorkingSpaceItem)=>(                    
                    <MenuItem key={cardItem.id} value={cardItem.id}>{cardItem.name}</MenuItem>
                )) : null
                }
            </Select>
        </div>
    );
}