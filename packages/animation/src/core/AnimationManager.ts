import {GSAPAdapter} from "../adapters/GSAPAdapter";
import type {AnimationDefinition} from "../types/AnimationDefinition";

export class AnimationManager{
 private readonly adapter=new GSAPAdapter();
 private readonly registry=new Map<string,AnimationDefinition>();

 register(def:AnimationDefinition){this.registry.set(def.id,def);}
 get(id:string){return this.registry.get(id);}
 createTimeline(){return this.adapter.createTimeline();}
 play(id:string){return this.registry.has(id);}
}