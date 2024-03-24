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
    
    const ratingReducer = (ratings:Map<string, number | null>, action:{type:string, coworkingspaceName:string, rating:number | null}) => {
        switch(action.type) {
            case 'add': {
                const newMap = new Map<string, number | null>(ratings);
                if (action.rating===null) {
                    newMap.delete(action.coworkingspaceName);
                    return newMap;
                } else {
                    newMap.set(action.coworkingspaceName, action.rating);
                    return newMap;
                }
            }
            case 'remove': {
                ratings.delete(action.coworkingspaceName);
                return new Map<string, number | null>(ratings);
            }
            default: return ratings;
        }
    }

    const [ratings, dispatchRating] = useReducer(ratingReducer, new Map<string, number | null>([["Chulalongkorn Hospital", 5], ["Rajavithi Hospital", 5], ["Thammasat University Hospital", 5]]));

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
                        // updated data
                        <Link href={`/coworkingspace/${cardItem.id}`} className="w-1/5" key={cardItem.id}> 
                            <Card coworkingspaceName={cardItem.name} imgSrc={cardItem.picture} value={ratings.get(`${cardItem.name}`) ?? 0} 
                            onRating={(coworkingspace:string, ratings:number | null)=>dispatchRating({type:'add', coworkingspaceName:coworkingspace, rating:ratings})}/>
                        </Link>
                    ))
                }
            </div>
            <div className="w-full text-xl font-medium">Rating List: {ratings.size}</div>
            {Array.from(ratings).map(([coworkingspace, rating]) => (
                <div key={coworkingspace} data-testid={coworkingspace} 
                onClick={()=>{dispatchRating({type:'remove', coworkingspaceName:coworkingspace, rating:0});}}>
                    {coworkingspace}: {rating}
                </div>
            ))}
        </div>
    );
}