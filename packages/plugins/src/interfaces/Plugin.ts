export interface Plugin{
  id:string;
  name:string;
  version:string;
  initialize():void;
  dispose():void;
}