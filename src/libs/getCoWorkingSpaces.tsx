export default async function getCoWorkingSpaces() {

    await new Promise((resolve)=>setTimeout(resolve, 1000))

    const response = await fetch("https://vaccine-app-backend.vercel.app/api/v1/hospitals", { next: {tags:['coworkingspaces']}})
    if(!response.ok) {
        throw new Error("Failed to fetch CoWorkingSpaces")
    }
    return await response.json()
}

//http://localhost:5000/api/v1/coworkingspaces