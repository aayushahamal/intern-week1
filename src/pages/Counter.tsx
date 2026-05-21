import { useState, useEffect } from "react";

interface CounterComponentProps {
    label: string;
}

export default function Counter ({label}:CounterComponentProps) {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `${label}: ${count}`;
        return () => {
            document.title = "React App";
        };
    }, [count, label]);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => Math.max(0, prevCount - 1));

   return (
  <div className="min-h-screen bg-amber-50 flex items-center justify-center">
    <div className="bg-white border border-amber-200 rounded-2xl shadow-md p-10 flex flex-col items-center gap-6 w-72">
      <p className="text-sm text-amber-800 uppercase tracking-widest">{label}</p>
      <div className="text-7xl font-semibold text-gray-900">{count}</div>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={count === 0}
          aria-label="Decrement"
          className="w-14 h-14 text-2xl rounded-xl border border-amber-200 bg-amber-50 text-amber-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-100"
        >
          −
        </button>
        <button
          onClick={increment}
          aria-label="Increment"
          className="w-14 h-14 text-2xl rounded-xl border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100"
        >
          +
        </button>
      </div>
    </div>
  </div>
);
}    