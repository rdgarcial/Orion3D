export class AssetCache{
  private readonly cache=new Map<string,unknown>();
  set(id:string,value:unknown){this.cache.set(id,value);}
  get<T>(id:string){return this.cache.get(id) as T|undefined;}
  has(id:string){return this.cache.has(id);}
  clear(){this.cache.clear();}
}