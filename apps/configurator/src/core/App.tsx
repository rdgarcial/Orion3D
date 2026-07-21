import {Canvas} from "@react-three/fiber";
import {Scene} from "../scene/Scene";
export function App(){return <Canvas camera={{position:[4,3,6],fov:45}} shadows><Scene/></Canvas>;}