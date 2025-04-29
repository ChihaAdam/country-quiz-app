import { create } from "zustand";
type QuestionNumberStore = {
  questionNumber: number;
  incrementQuestionNumber: () => void;
  restartQuestionNumber:()=>void;
};

export const useQuestionNumberStore = create<QuestionNumberStore>((set) => ({
  questionNumber: 0,
  incrementQuestionNumber: () =>
    set((state) => ({ questionNumber: state.questionNumber + 1 })),
  restartQuestionNumber:()=>{
    set(()=>({questionNumber:0}))
  }
}));
