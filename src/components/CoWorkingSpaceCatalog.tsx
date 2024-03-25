import Link from "next/link"
import Card from "./Card"
import { CoWorkingSpaceItem, CoWorkingSpaceJson } from "../../interface"
export default async function CoWorkingSpaceCatalog({coworkingspacesJson} : {coworkingspacesJson:Promise<CoWorkingSpaceJson>}) {
    const coworkingspacesJsonReady = await coworkingspacesJson
    return (
        <>
        Explore {coworkingspacesJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", flexDirection:"row",
            flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    coworkingspacesJsonReady.data.map((coworkingspaceItem:CoWorkingSpaceItem)=>(
                        <Link href={`/coworkingspace/${coworkingspaceItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                        p-2 sm:p-4 md:p-4 lg:p-8" key={coworkingspaceItem.name}>
                            <Card coworkingspaceName={coworkingspaceItem.name} imgSrc={coworkingspaceItem.image}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}