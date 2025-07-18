import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "./components/header";
import Loading from "./components/static/laoding";
import Question from "./components/question";
import { useQuestionNumberStore } from "./state/questionNumber";
import he from "he";
import QuestionNumbers from "./components/questionNumbers";
import { lazy, Suspense } from "react";
const Finished =lazy(()=>import("./components/finished.tsx"))

function App() {
  const { questionNumber } = useQuestionNumberStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
      );
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-white">
          Error loading questions
        </h1>
        <p className="mt-4 text-lg font-semibold text-white">
          Please try again later
        </p>
      </div>
    );
  }
  const questions = data.results;

  if (questionNumber > 9) {
    return <Suspense fallback={<div className="text-lg text-white">Loading ...</div>}>
      <Finished />
    </Suspense>;
  }

  const question = questions[questionNumber];
  return (
    <div className="flex flex-col max-w-3xl gap-10 px-4 py-8 mx-auto">
      <Header />
      <div className="w-full mx-auto bg-[hsla(0,0%,100%,0.1)] rounded-lg flex flex-col gap-10 p-15 ">
        <QuestionNumbers questionNumber={questionNumber} />
        <Question
          question={he.decode(question.question)}
          correct_answer={he.decode(question.correct_answer)}
          possible_answers={[
            he.decode(question.correct_answer),
            ...question.incorrect_answers.map((answer: string) => he.decode(answer)),
          ].sort(() => Math.random() - 0.5)}
        />
      </div>
    </div>
  );
}

export default App;
