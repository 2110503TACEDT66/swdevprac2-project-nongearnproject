'use client'
import BookingList from "@/components/BookingList"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default function MyBookingPage() {
    return (
        <main>
            <h1 className="text-4xl font-bold text-center mt-6 text-indigo-600">Your Book</h1>
            <Suspense fallback={ <p>Loading  ... <LinearProgress/></p> }>
                <BookingList></BookingList>            
            </Suspense>
        </main>
    )
}