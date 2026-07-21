import React from "react";
import {createRoot} from "react-dom/client";
import {Canvas} from "@react-three/fiber";

function Cube(){
  return (
    <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color="orange"/>
    </mesh>
  );
}

function App(){
  return (
    <Canvas camera={{position:[3,3,3]}}>
      <ambientLight intensity={2}/>
      <directionalLight position={[5,5,5]}/>
      <Cube/>
    </Canvas>
  );
}

createRoot(document.getElementById("root")!).render(<App/>);
