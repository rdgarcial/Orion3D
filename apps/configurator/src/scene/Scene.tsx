import {OrbitControls,Grid,Stats} from "@react-three/drei";
import {LightingManager} from "../managers/LightingManager";
import {EnvironmentManager} from "../managers/EnvironmentManager";
import {World} from "../world/World";
export function Scene(){return <><color attach="background" args={["#20232a"]}/><LightingManager/><EnvironmentManager/><Grid args={[20,20]}/><axesHelper args={[3]}/><World/><OrbitControls makeDefault/><Stats/></>;}