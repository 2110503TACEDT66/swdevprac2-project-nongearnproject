import React from "react";
import { TextField } from "@mui/material";
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import registerUser from "@/libs/registerUser";

export default async function SignupPanel () {

    const register = async(registerForm:FormData) => {
        "use server"
        const name = registerForm.get("userName") as string
        const tel = registerForm.get("userTel") as string
        const email = registerForm.get("userEmail") as string
        const password = registerForm.get("userPassword") as string
        const countBooking = 0
        const createAt = Date.now()

        try {
            // await dbConnect()
            // const user = await User.create({
            //     "name": name,
            //     "tel": tel,
            //     "email": email,
            //     "password": password,
            //     "role": "user",
            //     "countBooking": countBooking,
            //     "createAt": createAt
            // })
            registerUser(name, email, password, tel)
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
            <button type="submit" className="block rounded-md bg-indigo-400 
                hover:bg-indigo-700 px-3 py-2 text-white shadow-md">Sign-up</button>
            </div>
        </form>
    );
}
