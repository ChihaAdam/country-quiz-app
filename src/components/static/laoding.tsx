function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse-delay-0"></div>
        <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse-delay-200"></div>
        <div className="w-4 h-4 bg-purple-300 rounded-full animate-pulse-delay-400"></div>
      </div>
      <p className="mt-6 text-white font-medium text-lg opacity-80 animate-pulse">
        Loading<span className="inline-block">...</span>
      </p>
    </div>
  )
}

export default Loading
