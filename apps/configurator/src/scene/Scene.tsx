import React from "react";
import {OrbitControls} from "@react-three/drei";
import {LightingManager} from "../managers/LightingManager";
import {ModelViewer} from "../viewer/ModelViewer";
export function Scene(){return (<><color attach="background" args={["#111111"]}/><LightingManager/><ModelViewer/><OrbitControls makeDefault/></>);}
