import {describe,it,expect} from "vitest";
import {AnimationManager} from "../src/core/AnimationManager";
describe("AnimationManager",()=>it("registers animation",()=>{
 const m=new AnimationManager();
 m.register({id:"door",name:"Open Door",duration:1});
 expect(m.get("door")?.name).toBe("Open Door");
}));
