import type {Plugin} from "../interfaces/Plugin";

export class PluginRegistry{
  private readonly plugins=new Map<string,Plugin>();

  register(plugin:Plugin){
    this.plugins.set(plugin.id,plugin);
  }

  get(id:string){
    return this.plugins.get(id);
  }

  values(){
    return [...this.plugins.values()];
  }

  unregister(id:string){
    this.plugins.delete(id);
  }
}