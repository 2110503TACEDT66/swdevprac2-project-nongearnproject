export default async function createBooking(token:string, bookDate:string, coworkingSpaceId:string) {
    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/${coworkingSpaceId}/bookings`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            bookDate: bookDate,
        }),
    })
    if(!response.ok) {
        throw new Error("Cannot create coworking space")
    }

    const responseData = await response.json();

    return responseData;
}