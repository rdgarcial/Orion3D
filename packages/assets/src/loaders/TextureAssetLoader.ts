export class TextureAssetLoader{
  async load(url:string){
    return {type:"texture",url};
  }
}