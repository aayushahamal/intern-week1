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
        <div className="counter-wrapper">
            <p className="counter-label">{label}</p>
            <div className="counter-display">{count}</div>
            <div className="counter-buttons">
                <button
                    onClick={decrement}
                    disabled={count === 0}
                    aria-label ="Decreament"
                    >
                        -
                        </button>
                <button
                    onClick={increment}
                    aria-label="Increment"
                    >
                        + 
                    </button>
    
            </div>
        </div>
    );
}    