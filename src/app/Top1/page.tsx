import getTopOne from "@/libs/getTopOne";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { TopOneItem, TopOneJson } from "../../../interface";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function TopOne() {

    const session = await getServerSession(authOptions)

    var TopOneBooking
    if(session) {
        TopOneBooking = await getTopOne(session?.user.token)
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-6">
            {
                session?.user.role == "admin" ?
                <div>
                    <div className="text-6xl text-center flex flex-row">Top 1 User</div>
                    {
                        TopOneBooking.data.map((toponeitem:TopOneItem)=>(
                            <div key={toponeitem._id} className="my-5">
                                <div className="text-xl text-left">Id: {toponeitem._id}</div>
                                <div className="text-xl text-left">Name: {toponeitem.name}</div>
                                <div className="text-xl text-left">Tel: {toponeitem.tel}</div>
                                <div className="text-xl text-left">Email: {toponeitem.email}</div>
                                <div className="text-xl text-left">countBooking: {toponeitem.countBooking}</div>
                            </div>
                        ))
                    }
                </div>
                :
                <div className="text-4xl text-center">You are not authorized to access this page</div>
            }
        </main>
    );
};