import * as THREE from "three";

export const loadingManager = new THREE.LoadingManager();

loadingManager.onStart = () => console.log("Loading started");
loadingManager.onLoad = () => console.log("Loading finished");
loadingManager.onProgress = (_, loaded, total) =>
  console.log(`Loading ${loaded}/${total}`);
