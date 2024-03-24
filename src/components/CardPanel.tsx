'use client'
import { useReducer, useRef, useState, useEffect } from "react";
import Card from "./Card";
import Link from "next/link";
import getCoWorkingSpaces from "@/libs/getCoWorkingSpaces";
import { CoWorkingSpaceItem, CoWorkingSpaceJson } from "../../interface";
export default function CardPanel() {

    const [coworkingspaceResponse, setCoWorkingSpaceResponse] = useState<CoWorkingSpaceJson | null>(null)

    useEffect(()=>{
        const fetchData = async () => {
            const coworkingspace = await getCoWorkingSpaces()
            setCoWorkingSpaceResponse(coworkingspace)
        }
        fetchData()
    }, [])

    // const mockCardRepo = [
    //     {cid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
    //     {cid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
    //     {cid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    // ]

    if(!coworkingspaceResponse) return (<p>Car Panel is Loading ...</p>)

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
            flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
              {
                    coworkingspaceResponse.data.map((cardItem:CoWorkingSpaceItem)=>(
                        <Link href={`/coworkingspace/${cardItem.id}`} className="w-1/5" key={cardItem.id}> 
                            <Card coworkingspaceName={cardItem.name} imgSrc={cardItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}