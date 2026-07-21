import {describe,it,expect} from "vitest";
import {Runtime} from "../src/runtime/Runtime";
describe("Runtime",()=>it("initializes",()=>{const r=new Runtime();r.initialize();expect(r).toBeDefined();}));