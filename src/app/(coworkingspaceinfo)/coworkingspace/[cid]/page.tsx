import Image from "next/image"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace";
import { CoWorkingSpaceItem } from "../../../../../interface";

export default async function CardDetailPage({params} : {params: {cid:string}}) {
    
    // const coworkingspaceDetail:CoWorkingSpaceItem = await getCoWorkingSpace(params.cid)

    // return(
    //     <main className="text-center p-5">
    //         <h1 className="text-lg font-medium">CoWorkingSpace ID {params.cid}</h1>
    //         <div className="flex flex-row my-5">
    //             <Image src={coworkingspaceDetail.image}
    //             alt='CoWorkingSpace Image' width={0} height={0} sizes="100vw"
    //             className="rounded-lg w-[30%]"/>
    //             <div className="mx-5 text-left">
    //                 <div className="text-3xl mx-5 font-md mb-5">{coworkingspaceDetail.name}</div>
    //                 <div className="text-md mx-5">Address: {coworkingspaceDetail.address}</div>
    //                 <div className="text-md mx-5">Tel: {coworkingspaceDetail.tel}</div>
    //             </div>
    //         </div>
    //     </main>
    // );
}

// export async function generateStaticParams() {
//     return [{cid:'001'}, {cid:'002'}, {cid:'003'}, {cid:'004'}];
// }