import { useRouter } from "next/navigation";
export default async function deleteCoWorkingSpace(token:string, id:string) {
    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/bookings/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`, 
        }
    })

    if(!response.ok) {
        throw new Error("Cannot delete booking space")
    }
    const responseData = await response.json();
    return responseData;
}