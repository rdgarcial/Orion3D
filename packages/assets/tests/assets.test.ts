import {describe,it,expect} from "vitest";
import {AssetManager} from "../src/manager/AssetManager";

describe("AssetManager",()=>{
  it("creates manager",()=>{
    expect(new AssetManager()).toBeDefined();
  });
});
