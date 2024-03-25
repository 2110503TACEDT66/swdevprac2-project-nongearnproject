export default async function getCoWorkingSpace(    id:string) {
    const response = await fetch(`https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/coworkingspaces/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch coworkingspace")
    }
    return await response.json()
}

//http://localhost:5000/api/v1/coworkingspaces