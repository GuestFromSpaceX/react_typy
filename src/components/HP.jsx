// rnsc для создания
import React, {useState} from "react";

const HP = function () {
    const [count, setCount] = useState(100)

    function increment() {
        setCount(count + 1)
    }
    
    function decrement() {
        setCount(count - 1)
    }

    return (
        <>
            <h1 className="bg-green-100">{count}</h1>
            <button onClick={increment}>in+</button>
            <button onClick={decrement}>de-</button>
        </>
    )
}

export default HP;