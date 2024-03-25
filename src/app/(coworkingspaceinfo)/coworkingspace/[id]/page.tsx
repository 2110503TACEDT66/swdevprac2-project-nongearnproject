import Image from "next/image"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace";
import { CoWorkingSpaceItem } from "../../../../../interface";

export default async function CardDetailPage({params} : {params: {id:string}}) {
    
    const coworkingspaceDetail = await getCoWorkingSpace(params.id)
    var OpenTime = new Date(coworkingspaceDetail.data.open_time)
    var CloseTime = new Date(coworkingspaceDetail.data.close_time)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">CoWorkingSpace ID {params.id}</h1>
            <div className="flex flex-row my-5">
                <Image src={coworkingspaceDetail.data.image}
                alt='CoWorkingSpace Image' width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="mx-5 text-left">
                    <div className="text-3xl mx-5 font-md mb-5">{coworkingspaceDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {coworkingspaceDetail.data.address}</div>
                    <div className="text-md mx-5">Tel: {coworkingspaceDetail.data.tel}</div>
                    <div className="text-md mx-5">Open time: {OpenTime.toString()}</div>
                    <div className="text-md mx-5">Close time: {CloseTime.toString()}</div>
                </div>
            </div>
        </main>
    );
}
