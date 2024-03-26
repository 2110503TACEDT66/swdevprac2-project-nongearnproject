import EditFrom from "@/components/EditFrom"
import getBooking from "@/libs/getBooking"
import { dividerClasses } from "@mui/material"
import { useSession } from 'next-auth/react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function EditBooking({params} : {params: {id:string}}){
    const session = await getServerSession(authOptions)
    if(!session){  
        return null     
    }    
    
    const booking = await getBooking(session.user.token, params.id)
    const {bookDate, coworkingspace, createdAt, user} = booking.data
    const idid = params.id;
    return <EditFrom id={idid} bookDate={bookDate} username={user} coworkingspaceId={coworkingspace} createdAt={createdAt} />
}