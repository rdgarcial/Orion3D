import React,{createContext,useMemo} from "react";
import {OrionEngine} from "@orion/core";
export const OrionContext=createContext(null as any);
export function OrionProvider({children}:{children:React.ReactNode}){
 const engine=useMemo(()=>new OrionEngine(),[]);
 return <OrionContext.Provider value={{engine}}>{children}</OrionContext.Provider>;
}
