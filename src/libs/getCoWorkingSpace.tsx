export default async function getCoWorkingSpace(    id:string) {
    const response = await fetch(`https://swdevprac2-project-nongearnproject.vercel.app/api/coworkingspaces/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch coworkingspace")
    }
    return await response.json()
}

//http://localhost:5000/api/v1/coworkingspaces