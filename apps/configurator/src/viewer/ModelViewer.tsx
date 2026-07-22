import React,{Suspense} from "react";
import Car from "./Car";
import LoadingOverlay from "../ui/LoadingOverlay";
export function ModelViewer(){return (<Suspense fallback={<LoadingOverlay/>}><Car/></Suspense>);}
