import {RendererFactory} from "../factory/RendererFactory";
import type {RenderContext} from "../context/RenderContext";

export class Renderer{
 readonly adapter=RendererFactory.createThree();
 initialize(ctx:RenderContext){this.adapter.initialize(ctx);}
 render(){this.adapter.render();}
 resize(w:number,h:number){this.adapter.resize(w,h);}
 dispose(){this.adapter.dispose();}
}