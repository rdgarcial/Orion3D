import type {RendererAdapter} from "./RendererAdapter";
import type {RenderContext} from "../context/RenderContext";

export class ThreeRendererAdapter implements RendererAdapter{
 private context?:RenderContext;
 initialize(ctx:RenderContext){this.context=ctx;}
 render(){/* Three.js renderer.render(scene,camera) */ }
 resize(_w:number,_h:number){}
 dispose(){this.context=undefined;}
}