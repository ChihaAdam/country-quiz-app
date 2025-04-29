import { usePoints } from "../state/points";

function Header() {
  const {points}=usePoints();
  return (
    <div className="flex justify-between items-center select-none">
      <h1 className="text-3xl font-bold text-white">Country Quiz</h1>
      <div className="flex gap-2  text-white font-arial text-md gradiant font-semibold  rounded-full px-3 py-2">
        <span>🏆</span> {points}/10 points
      </div>
    </div>
  )
}

export default Header
