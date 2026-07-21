import {describe,it,expect} from "vitest";
import {MaterialManager} from "../src/core/MaterialManager";

describe("MaterialManager",()=>{
  it("registers material",()=>{
    const m=new MaterialManager();
    m.register({id:"1",name:"Paint",type:"paint"});
    expect(m.get("1")).toBeDefined();
  });
});
