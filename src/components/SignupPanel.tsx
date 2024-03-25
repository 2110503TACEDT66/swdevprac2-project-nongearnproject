import React from "react";
import { TextField } from "@mui/material";
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";

export default async function SignupPanel () {

    const register = async(registerForm:FormData) => {
        "use server"
        const name = registerForm.get("userName")
        const tel = registerForm.get("userTel")
        const email = registerForm.get("userEmail")
        const password = registerForm.get("userPassword")
        const countBooking = 0
        const createAt = Date.now()

        try {
            await dbConnect()
            const user = await User.create({
                "name": name,
                "tel": tel,
                "email": email,
                "password": password,
                "role": "user",
                "countBooking": countBooking,
                "createAt": createAt
            })
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <form action={register}>
            <div className="w-[100%] bg-gray-300 rounded-md px-3 py-3 flex flex-col space-y-2">
            <TextField id="userName" name="userName" label="userName" className="bg-white rounded-md" required
                placeholder="John Smith"/>
            <TextField id="userTel" name="userTel" label="userTel" className="bg-white rounded-md" required 
                placeholder="012-345-6789"/>
            <TextField id="userEmail" name="userEmail" label="userEmail" className="bg-white rounded-md" required
                placeholder="Email@XXX.com"/>
            <TextField id="userPassword" name="userPassword" label="userPassword" className="bg-white rounded-md" required 
                placeholder="password"/>
            <button type="submit" className="block rounded-md bg-cyan-400 
                hover:bg-cyan-700 px-3 py-2 text-white shadow-md">Sign-up</button>
            </div>
        </form>
    );
}
