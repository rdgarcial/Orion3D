import type {MaterialDefinition} from "../types/MaterialDefinition";
export class MaterialFactory{
  create(def:MaterialDefinition){
    return {...def};
  }
}