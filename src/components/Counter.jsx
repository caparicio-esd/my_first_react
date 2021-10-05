import React, { useState } from 'react'

const Counter = () => {
    // let count = 0;
    // const reactCount = useState(0)[0] // get
    // const setReactCount = useState(0)[1] // set

    const [count, setCount] = useState(0)


    // const frutas = ["manzana", "pera"]
    // const [m, p] = frutas


    const addOne = (ev) => {
        setCount(count + 1)
    }

    const removeOne = (ev) => {
        setCount(count - 1)
    }

    const reset = (ev) => {
        setCount(0)
    }

    const printInput = (ev) => {
        console.log(ev);
        console.log("texto texto...");
    }

    return (
        <div>
            counter... 
            <button onClick={addOne}>add me one</button>
            <button onClick={removeOne}>remove me one</button>
            <button onClick={reset}>reset</button>

            <input type="text" onKeyUp={printInput} />
            <span>{count}</span>
        </div>
    )
}

export default Counter



