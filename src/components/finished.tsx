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
      <img src='src/assets/congrats.png'></img>
      <div className="w-4/5 text-center flex flex-col gap-4"> 
      <h1 className=' text-2xl'>Congrats! you completed the quiz </h1>
      <p>You answer {points}/10 correctly</p>
      <button className="gradiant text-xl py-2 px-14 rounded-lg hover:brightness-110 transition-all duration-300 ease-in-out cursor-pointer my-10" onClick={handleRestart}>Play again</button>
      </div>
    </div>
  )
}

export default Finished
