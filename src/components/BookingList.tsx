'use client'
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"
import { BookingItem, BookingJson } from "../../interface"
import { useState, useEffect } from "react"
import getBookings from "@/libs/getBookings"
import { useSession } from 'next-auth/react'
import Link from "next/link"
import deleteBooking from "@/libs/deleteBooking"
import { useRouter } from "next/navigation"
import { revalidateTag } from "next/cache"
import Swal from "sweetalert2"

export default function BookingList() {
    const { data: session } = useSession()
    const [bookResponse, setBookResponse] = useState<BookingJson | null>(null)

    useEffect(()=>{
        const fetchData = async () => {
            var booking
            if(session) {
                booking = await getBookings(session?.user.token)
            }
            setBookResponse(booking)
        }
        fetchData()
    })
    return (
        <>
        {   
            bookResponse?.count == 0 ? <div className="text-4xl font-medium
            text-center my-10 text-black">No CoWorkingSpace Booking</div>
            :
            bookResponse?.data.map((bookingItem:BookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-6"
                key={bookingItem._id}>
                    <div className="text-md mt-2">booking_id: {bookingItem._id}</div>
                    <div className="text-md">bookDate: {new Date(bookingItem.bookDate).toString()}</div>
                    <div className="text-md">coworkingspace: </div>
                    <div className="text-md ml-4">_id: {bookingItem.coworkingspace._id}</div>
                    <div className="text-md ml-4">name: {bookingItem.coworkingspace.name}</div>
                    <div className="text-md ml-4">address: {bookingItem.coworkingspace.address}</div>
                    <div className="text-md ml-4">tel: {bookingItem.coworkingspace.tel}</div>
                    <div className="text-md">createdAt: {new Date(bookingItem.createdAt).toString()}</div>
                    
                    <div className="flex flex-row space-x-4">
                        <Link href={`/editBooking/${bookingItem._id}`}>
                            <button className="block rounded-md bg-sky-600 hover:bg-sky-700 px-3 py-2
                            text-white shadow-sm my-4">
                                Edit
                            </button>                       
                        </Link>
                        {
                            session?
                            <button className="block rounded-md bg-red-600 hover:bg-red-700 px-3 py-2
                            text-white shadow-sm my-4" onClick={async ()=>{
                                const comfirm = confirm('Are you sure to delete?')
                                if(comfirm) {
                                    const res = await deleteBooking(session?.user.token, bookingItem._id)
                                    Swal.fire({
                                    title: 'Success',
                                    text: 'Delete Booking Success',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                    })
                                } 
                                }}>
                                Delete
                            </button>
                            : null
                        }    
                    </div>
                </div>
            ))
        }
        </>
    )
}   

{/* <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                    text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem.id))}>
                        Remove from Cart
                    </button> */}
                    //new Date(bookingItem.createdAt).toString()