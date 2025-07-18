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
  return (
    <div className="mx-auto">
      <h1 className="text-2xl max-sm:text-lg font-bold text-white">{question}</h1>
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-4 w-full grid-rows-2 gap-4 mt-4">
        {possible_answers.map((answer, index) => (
          <button
            key={index}
            className="flex justify-center gap-2 items-center bg-gradient-to-r bg-[#7761a738] hover:from-purple-500 hover:to-pink-500  cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={() => handleResponse(answer)}
            disabled={answered}
          >
            {answer}
            {answered && (
              <img
                src={answer === correct_answer ? "./assets/Check_round_fill.svg" : "./assets/Close_round_fill.svg"}
              ></img>
            )}{" "}
          </button>
        ))}
      </div>
      {answered && (
        <div
          className="gradiant font-semibold text-center mt-4 py-2 rounded-lg cursor-pointer text-white"
          onClick={() => {
            incrementQuestionNumber();
            setAnsweredToFalse();
          }}
        >
          continue to next question
        </div>
      )}
    </div>
  );
}

export default Question;
