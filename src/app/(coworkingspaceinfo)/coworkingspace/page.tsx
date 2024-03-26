import getCoWorkingSpaces from "@/libs/getCoWorkingSpaces";
import { Suspense } from "react";
import { LinearProgress, CircularProgress } from "@mui/material";
import CoWorkingSpaceCatalog from "@/components/CoWorkingSpaceCatalog";

export default function Car() {

    const coworkingspaces = getCoWorkingSpaces()

    return (
        <main className="text-center p-5">  
            <h1 className="text-xl font-medium">Select CoWorkingSpace</h1>
            <Suspense fallback={ <p>Loading  ... <LinearProgress/></p> }>
                <CoWorkingSpaceCatalog coworkingspacesJson={coworkingspaces}/>
            </Suspense>
        </main>
    );
}