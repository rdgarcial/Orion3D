import {describe,it,expect} from "vitest";
import {PluginManager} from "../src/core/PluginManager";

describe("PluginManager",()=>{
  it("installs plugin",()=>{
    const manager=new PluginManager();
    manager.install({
      id:"demo",
      name:"Demo",
      version:"1.0.0",
      initialize(){},
      dispose(){}
    });
    expect(manager.registry.get("demo")).toBeDefined();
  });
});
