import { Dayjs } from "dayjs";
import getCoWorkingSpaces from "./getCoWorkingSpaces";

export default async function createBooking(token:string, bookDate:Dayjs, coworkingspaceName :string) {

    const coworkingSpaces = await getCoWorkingSpaces();
    const coworkingSpace = coworkingSpaces.find(() => coworkingSpace.name === coworkingspaceName);
    console.log(coworkingSpace);
    // const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/${coworkingSpaceId}/bookings`, {
    //     method: "POST",
    //     headers: {
    //         authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({
    //         bookDate: bookDate,
    //     }),
    // })
    // if(!response.ok) {
    //     throw new Error("Cannot create coworking space")
    // }

    // const responseData = await response.json();

    // return responseData;
}