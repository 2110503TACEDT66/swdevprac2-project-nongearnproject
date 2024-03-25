export default async function getCoWorkingSpaces() {
    const response = await fetch("https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/coworkingspaces", { next: {tags:['coworkingspaces']}})
    if(!response.ok) {
        throw new Error("Failed to fetch CoWorkingSpaces")
    }
    return await response.json()
}

//http://localhost:3000/api/coworkingspaces
//https://vaccine-app-backend.vercel.app/api/v1/hospitals