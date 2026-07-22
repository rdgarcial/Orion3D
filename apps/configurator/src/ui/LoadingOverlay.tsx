import React from "react";
import {Html,useProgress} from "@react-three/drei";
export default function LoadingOverlay(){const {progress}=useProgress();return <Html center><div>Loading {progress.toFixed(0)}%</div></Html>;}
