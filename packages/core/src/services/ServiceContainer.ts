export class ServiceContainer{
 private services=new Map<string,unknown>();
 register<T>(k:string,v:T){this.services.set(k,v);}
 resolve<T>(k:string){return this.services.get(k) as T;}
 has(k:string){return this.services.has(k);}
 unregister(k:string){this.services.delete(k);}
 clear(){this.services.clear();}
}