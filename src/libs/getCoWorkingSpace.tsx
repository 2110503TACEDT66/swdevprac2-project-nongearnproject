export default async function getCoWorkingSpace(id:string) {
    const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch coworkingspace")
    }
    return await response.json()
}