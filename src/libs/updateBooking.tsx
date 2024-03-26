export default async function updateBooking(token:string, bookdate:string, bookingId:string) {

    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/bookings/${bookingId}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            bookDate: bookdate
        }),
    })
    if(!response.ok) {
        throw new Error("Cannot update booking")
    }

    const responseData = await response.json();

    return responseData;
}
