import { create } from "zustand";
type answered = {
    answered:boolean,
    setAnsweredToFalse:()=>void,
    setAnsweredToTrue:()=>void
}

export const useAnswered=create<answered>((set)=>({
    answered:false,
    setAnsweredToFalse:()=>set(()=>({answered:false})),
    setAnsweredToTrue:()=>set(()=>({answered:true}))
}))