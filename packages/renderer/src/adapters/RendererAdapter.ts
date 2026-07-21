import type {RenderContext} from "../context/RenderContext";
export interface RendererAdapter{
 initialize(ctx:RenderContext):void;
 render():void;
 resize(width:number,height:number):void;
 dispose():void;
}