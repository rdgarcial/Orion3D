import { Suspense } from "react";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/models/car.glb");
  return <primitive object={gltf.scene} />;
}

export function ModelViewer() {
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5,8,5]} intensity={3} />
      <Suspense fallback={<Html center>Loading model...</Html>}>
        <Model />
      </Suspense>
    </>
  );
}
