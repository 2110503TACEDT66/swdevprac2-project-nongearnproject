'use client'
import BookingList from "@/components/BookingList"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
export default function MyBookingPage() {
    return (
        <main>
            <h1 className="text-lg font-bold text-center mt-3">Your Book</h1>
            <Suspense fallback={ <p>Loading  ... <LinearProgress/></p> }>
                <BookingList></BookingList>            
            </Suspense>
        </main>
    )
}