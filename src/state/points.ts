import { create } from "zustand";
type points={
    points:number,
    addPoint:()=>void,
    restartPoints:()=>void
}
export const usePoints= create<points>((set)=>({
    points:0,
    addPoint:()=>{
        set((state)=>({points:state.points+1}));
    },
    restartPoints:()=>set(()=>({points:0}))
}))