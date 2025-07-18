import { usePoints } from "../state/points"
import { useQueryClient } from '@tanstack/react-query';
import { useQuestionNumberStore } from "../state/questionNumber";

function Finished() {
    const queryClient = useQueryClient();
 const {restartQuestionNumber}=useQuestionNumberStore();
 const {restartPoints}=usePoints();
  const handleRestart=()=>{
    queryClient.invalidateQueries();
    restartPoints();
    restartQuestionNumber();

  }
  const {points}=usePoints();
  return (
    <div className="w-fit text-white bg-[hsl(0,0%,100%,0.05)] flex flex-col items-center gap-2 p-2 rounded-xl">
      <img src='./congrats.png'></img>
      <div className="flex flex-col w-4/5 gap-4 text-center"> 
      <h1 className='text-2xl '>Congrats! you completed the quiz </h1>
      <p>You answer {points}/10 correctly</p>
      <button className="py-2 my-10 text-xl transition-all duration-300 ease-in-out rounded-lg cursor-pointer gradiant px-14 hover:brightness-110" onClick={handleRestart}>Play again</button>
      </div>
    </div>
  )
}

export default Finished
