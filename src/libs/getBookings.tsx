export default async function getBookings(token:string) {

    const response = await fetch("https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/bookings", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`, 
        }
    })

    if(!response.ok) {
        throw new Error("Cannot get Bookings")
    }

    const responseData = await response.json();

    return responseData;
}
