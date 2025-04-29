
const questionsNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bgOfQuestionCircle(number: number, actual: number): string {
  if (actual >= number) return "gradiant";
  return "";
}

function QuestionNumbers({questionNumber}: {questionNumber: number}) {
  return (
    <div className="flex justify-center flex-wrap  mx-auto gap-5 ">
    {questionsNum.map((questionNum) => (
      <div
        key={questionNum}
        className={`${bgOfQuestionCircle(
          questionNum - 1,
          questionNumber
        )} rounded-full bg-violet-950 w-10 h-10 flex justify-center items-center text-white`}
      >
        {questionNum}
      </div>
    ))}
    </div>
  )
}

export default QuestionNumbers
