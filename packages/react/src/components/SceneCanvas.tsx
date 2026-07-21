import {Canvas} from "@react-three/fiber";
import React from "react";
export function SceneCanvas(){
 return <Canvas camera={{position:[3,3,3],fov:45}}>
   <ambientLight intensity={1}/>
   <mesh>
     <boxGeometry/>
     <meshStandardMaterial color="orange"/>
   </mesh>
 </Canvas>;
}
