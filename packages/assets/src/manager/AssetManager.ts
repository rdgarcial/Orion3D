import {AssetCache} from "../cache/AssetCache";
import {GLTFAssetLoader} from "../loaders/GLTFAssetLoader";
import {HDRLoader} from "../loaders/HDRLoader";
import {TextureAssetLoader} from "../loaders/TextureAssetLoader";

export class AssetManager{
  readonly cache=new AssetCache();
  readonly gltf=new GLTFAssetLoader();
  readonly hdr=new HDRLoader();
  readonly texture=new TextureAssetLoader();

  async loadGLTF(id:string,url:string){
    const asset=await this.gltf.load(url);
    this.cache.set(id,asset);
    return asset;
  }

  async loadHDR(id:string,url:string){
    const asset=await this.hdr.load(url);
    this.cache.set(id,asset);
    return asset;
  }

  async loadTexture(id:string,url:string){
    const asset=await this.texture.load(url);
    this.cache.set(id,asset);
    return asset;
  }
}