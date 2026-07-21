export interface MaterialDefinition{
  id:string;
  name:string;
  type:"paint"|"glass"|"metal"|"carbon"|"rubber"|"leather";
  color?:string;
  roughness?:number;
  metalness?:number;
}