export class GLTFAssetLoader{
  async load(url:string){
    return {type:"gltf",url};
  }
}