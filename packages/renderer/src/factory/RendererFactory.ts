import {ThreeRendererAdapter} from "../adapters/ThreeRendererAdapter";
export class RendererFactory{
 static createThree(){return new ThreeRendererAdapter();}
}