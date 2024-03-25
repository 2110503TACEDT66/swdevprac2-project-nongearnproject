export default async function registerUser(username:string,email:string, password:string, tel:string) {
        const response = await fetch("https://presentation-day-1-nongearnproject-black.vercel.app/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username as any,
                email: email as any,
                password: password as any,
                tel: tel as any,
                role: "user",
            }),
        })
        if (!response.ok) {
            throw new Error("Failed to register")
        }
    
        return await response.json()
}