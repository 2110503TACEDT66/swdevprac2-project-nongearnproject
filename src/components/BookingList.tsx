'use client'
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interface"

export default function BookingList() {
    
    const bookItems = useAppSelector( (state)=>state.bookSlice.bookItems )
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {   
            bookItems.length == 0 ? <div className="text-4xl font-medium
            text-center my-10 text-black">No Vaccine Booking</div>
            :
            bookItems.map((bookingItem:BookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                key={bookingItem.id}>
                    <div className="text-md">Name: {bookingItem.name}</div>
                    <div className="text-md">Surname: {bookingItem.surname}</div>
                    <div className="text-md">ID: {bookingItem.id}</div>
                    <div className="text-md">At: {bookingItem.hospital}</div>
                    <div className="text-md">Date: {bookingItem.bookDate}</div>
                    
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                    text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem.id))}>
                        Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}   