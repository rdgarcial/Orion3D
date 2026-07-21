import {describe,it,expect} from "vitest";
import {RendererFactory} from "../src/factory/RendererFactory";
describe("RendererFactory",()=>it("creates adapter",()=>{
 expect(RendererFactory.createThree()).toBeDefined();
}));