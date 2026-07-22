import React from "react";
import { useGLTF, Center } from "@react-three/drei";

export default function Car() {
    const { scene } = useGLTF("/models/car.glb");

    return (
        <Center>
            <primitive
                object={scene}
                scale={100}
            />
        </Center>
    );
}