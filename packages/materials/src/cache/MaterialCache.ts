export class MaterialCache{
  private readonly map=new Map<string,unknown>();
  set(id:string,m:unknown){this.map.set(id,m);}
  get<T>(id:string){return this.map.get(id) as T|undefined;}
  has(id:string){return this.map.has(id);}
  clear(){this.map.clear();}
}