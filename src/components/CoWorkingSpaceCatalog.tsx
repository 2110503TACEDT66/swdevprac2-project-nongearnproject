import Link from "next/link"
import Card from "./Card"
import { CoWorkingSpaceItem, CoWorkingSpaceJson } from "../../interface"
export default async function CarCatalog({coworkingspacesJson} : {coworkingspacesJson:Promise<CoWorkingSpaceJson>}) {
    const coworkingspacesJsonReady = await coworkingspacesJson
    return (
        <>
        Explore {coworkingspacesJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", flexDirection:"row",
            flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    coworkingspacesJsonReady.data.map((coworkingspaceItem:CoWorkingSpaceItem)=>(
                        <Link href={`/coworkingspace/${coworkingspaceItem.id}`} className="w-1/5" key={coworkingspaceItem.id}>
                            <Card coworkingspaceName={coworkingspaceItem.name} imgSrc={coworkingspaceItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}