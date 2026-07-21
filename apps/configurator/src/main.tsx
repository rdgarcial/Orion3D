import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls, Stats } from "@react-three/drei";
import "./index.css";

function Scene() {
    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 8, 5]} intensity={3} />

            <Grid args={[20, 20]} />
            <axesHelper args={[3]} />

            <mesh castShadow position={[0, 0.5, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            <OrbitControls makeDefault />
            <Stats />
        </>
    );
}

function App() {
    return (
        <Canvas shadows camera={{ position: [4, 3, 6], fov: 45 }}>
            <color attach="background" args={["#20232a"]} />
            <Scene />
        </Canvas>
    );
}

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);