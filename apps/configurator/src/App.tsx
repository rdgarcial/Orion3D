import React from "react";
import {Canvas} from "@react-three/fiber";
import {Scene} from "./scene/Scene";
export default function App(){return <Canvas shadows camera={{position:[4,3,6],fov:45}}><Scene/></Canvas>;}
