export default async function getBooking(token:string,id:string) {

    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/bookings/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`, 
        }
    })

    if(!response.ok) {
        throw new Error("Cannot get Booking")
    }

    const responseData = await response.json();

    return responseData;
}
