import {PluginRegistry} from "../registry/PluginRegistry";
import type {Plugin} from "../interfaces/Plugin";

export class PluginManager{
  readonly registry=new PluginRegistry();

  install(plugin:Plugin){
    plugin.initialize();
    this.registry.register(plugin);
  }

  uninstall(id:string){
    const plugin=this.registry.get(id);
    plugin?.dispose();
    this.registry.unregister(id);
  }
}