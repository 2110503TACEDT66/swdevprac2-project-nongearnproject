import { Dayjs } from "dayjs";
import getCoWorkingSpaces from "./getCoWorkingSpaces";

export default async function createBooking(token:string, bookdate:string, coworkingspaceId:string) {

    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/coworkingspaces/6600f8a00415a1fe490691af/bookings/`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            bookDate: bookdate,
            //bookDate: "2024-07-10T00:35:49.000Z"
        }),
    })
    if(!response.ok) {
        throw new Error("Cannot create booking")
    }

    const responseData = await response.json();

    return responseData;
}

    // const coworkingSpaces = await getCoWorkingSpaces();
    // const coworkingSpace = coworkingSpaces.find(() => coworkingSpace.name === coworkingspaceName);
    // console.log(coworkingSpace);
    // https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/coworkingspaces/6600f8a00415a1fe490691af/bookings/
    // https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/coworkingspaces/${coworkingspaceId}/bookings/