import Link from "next/link";
import Card from "./Card";
import { CoWorkingSpaceItem, CoWorkingSpaceJson } from "../../interface";
import { revalidateTag } from "next/cache";

export default async function CoWorkingSpaceCatalog({ coworkingspacesJson }: { coworkingspacesJson: Promise<CoWorkingSpaceJson> }) {

    revalidateTag("coworkingspaces");

    const coworkingspacesJsonReady = await coworkingspacesJson;

    return (
        <>
            <h1 className="text-3xl text-center font-bold text-indigo-700 my-8">Explore {coworkingspacesJsonReady.count} Models in Our Catalog</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    coworkingspacesJsonReady.data.map((coworkingspaceItem: CoWorkingSpaceItem) => (
                        <Link href={`/coworkingspace/${coworkingspaceItem._id}`} key={coworkingspaceItem.name} 
                        className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                                <Card coworkingspaceName={coworkingspaceItem.name} imgSrc={coworkingspaceItem.image} />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
