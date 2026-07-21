import {describe,it,expect} from "vitest";
import {EventBus} from "../src/events/EventBus";
describe("EventBus",()=>it("emits",()=>{const b=new EventBus();let ok=false;b.on("x",()=>ok=true);b.emit("x");expect(ok).toBe(true);}));