import React, { useState } from 'react';

function CounterExample(){
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>
            {count}
        </h1>
        <button onClick={()=> setCount(count + 5)}>
            Plus
        </button>
        <button onClick={()=> setCount(count - 5)}>
            Minus
        </button>
        </>
    )
}

  export default CounterExample;