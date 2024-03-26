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
        <main className="w-full flex flex-col items-center space-y-4 mt-6">
            {session?.user.role === "admin" ? (
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-indigo-700 mb-8">Top 1 User</h1>
                    {TopOneBooking ? (
                        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                            <div className="text-xl text-left mb-4">ID: {TopOneBooking.data[0]._id}</div>
                            <div className="text-xl text-left mb-4">Name: {TopOneBooking.data[0].name}</div>
                            <div className="text-xl text-left mb-4">Tel: {TopOneBooking.data[0].tel}</div>
                            <div className="text-xl text-left mb-4">Email: {TopOneBooking.data[0].email}</div>
                            <div className="text-xl text-left mb-4">Bookings: {TopOneBooking.data[0].countBooking}</div>
                        </div>
                    ) : (
                        <div className="text-2xl text-indigo-700">Loading...</div>
                    )}
                </div>
            ) : (
                <div className="text-4xl text-center text-red-600">You are not authorized to access this page</div>
            )}
        </main>
    );
};

/**
 * import getTopOne from "@/libs/getTopOne";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { TopOneItem, TopOneJson } from "../../../interface";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function TopOne() {
    const session = await getServerSession(authOptions);
    const [topOneBooking, setTopOneBooking] = useState<TopOneJson | null>(null);

    useEffect(() => {
        const fetchTopOne = async () => {
            if (session) {
                const topOne = await getTopOne(session.user.token);
                setTopOneBooking(topOne);
            }
        };

        fetchTopOne();
    }, [session]);

    return (
        <main className="w-full flex flex-col items-center space-y-4 mt-6">
            {session?.user.role === "admin" ? (
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-indigo-700 mb-8">Top 1 User</h1>
                    {topOneBooking ? (
                        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                            <div className="text-xl text-left mb-4">ID: {topOneBooking.data[0]._id}</div>
                            <div className="text-xl text-left mb-4">Name: {topOneBooking.data[0].name}</div>
                            <div className="text-xl text-left mb-4">Tel: {topOneBooking.data[0].tel}</div>
                            <div className="text-xl text-left mb-4">Email: {topOneBooking.data[0].email}</div>
                            <div className="text-xl text-left mb-4">Bookings: {topOneBooking.data[0].countBooking}</div>
                        </div>
                    ) : (
                        <div className="text-2xl text-indigo-700">Loading...</div>
                    )}
                </div>
            ) : (
                <div className="text-4xl text-center text-red-600">You are not authorized to access this page</div>
            )}
        </main>
    );
}

 */