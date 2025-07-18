import { useAnswered } from "../state/answerState";
import { useQuestionNumberStore } from "../state/questionNumber";
import { usePoints } from "../state/points";
type question = {
  question: string;
  correct_answer: string;
  possible_answers: string[];
};

function Question({ question, correct_answer, possible_answers }: question) {
  const { addPoint } = usePoints();
  const handleResponse = (response: string) => {
    if (response === correct_answer) addPoint();
    setAnsweredToTrue();
  };
  const { answered, setAnsweredToTrue, setAnsweredToFalse } = useAnswered();
  const { incrementQuestionNumber } = useQuestionNumberStore();
  function nextQuestion() {
    setAnsweredToFalse();
    incrementQuestionNumber();
  }
  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold text-white max-sm:text-lg">{question}</h1>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-4 mt-4 max-md:grid-cols-1 max-md:grid-rows-4">
        {possible_answers.map((answer, index) => (
          <button
            key={index}
            className="flex justify-center gap-2 items-center bg-gradient-to-r bg-[#7761a738] not-disabled:hover:from-purple-500 not-disabled:hover:to-pink-500 disabled:cursor-not-allowed cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={() => handleResponse(answer)}
            disabled={answered}
          >
            {answer}
            {answered && (
              <img
                src={answer === correct_answer ? "./Check_round_fill.svg" : "./Close_round_fill.svg"}
              ></img>
            )}{" "}
          </button>
        ))}
      </div>
      {answered && (
        <div
          className="py-2 mt-4 font-semibold text-center text-white rounded-lg cursor-pointer gradiant"
          onClick={nextQuestion}
        >
          continue to next question
        </div>
      )}
    </div>
  );
}

export default Question;
