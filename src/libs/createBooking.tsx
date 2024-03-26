export default async function createBooking(token:string, bookdate:string, coworkingspaceId:string) {

    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/coworkingspaces/${coworkingspaceId}/bookings/`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            bookDate: bookdate
        }),
    })
    if(!response.ok) {
        throw new Error("Cannot create booking")
    }

    const responseData = await response.json();

    return responseData;
}
