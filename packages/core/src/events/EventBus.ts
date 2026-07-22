export type Handler<T=unknown>=(e:T)=>void;
export class EventBus{
 private map=new Map<string,Set<Handler>>();
 on(t:string,h:Handler){if(!this.map.has(t))this.map.set(t,new Set());this.map.get(t)!.add(h);}
 off(t:string,h:Handler){this.map.get(t)?.delete(h);}
 emit(t:string,e?:unknown){this.map.get(t)?.forEach(h=>h(e));}
}