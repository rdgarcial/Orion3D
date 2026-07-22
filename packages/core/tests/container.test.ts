import {describe,it,expect} from "vitest";
import {ServiceContainer} from "../src/services/ServiceContainer";
describe("Container",()=>it("stores",()=>{const c=new ServiceContainer();c.register("a",1);expect(c.resolve("a")).toBe(1);}));