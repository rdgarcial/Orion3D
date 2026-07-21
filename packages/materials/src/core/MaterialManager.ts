import {MaterialCache} from "../cache/MaterialCache";
import {MaterialFactory} from "../factory/MaterialFactory";
import type {MaterialDefinition} from "../types/MaterialDefinition";

export class MaterialManager{
  readonly cache=new MaterialCache();
  readonly factory=new MaterialFactory();

  register(def:MaterialDefinition){
    const mat=this.factory.create(def);
    this.cache.set(def.id,mat);
    return mat;
  }

  get(id:string){
    return this.cache.get(id);
  }
}