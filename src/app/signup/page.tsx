import React from "react";
import SignupPanel from '@/components/SignupPanel'

export default function Signup() {

    return (
        <div className="w-[30%] bg-white rounded-md drop-shadow-md flex flex-col justify-center mx-auto my-10 px-10 py-8 mt-24 border-gray-200 border-2">
            <div className="text-indigo-400 mb-7">
                <div className="text-2xl font-bold">Sign Up Now</div>
            </div>
            <SignupPanel/>
        </div>
    );
};