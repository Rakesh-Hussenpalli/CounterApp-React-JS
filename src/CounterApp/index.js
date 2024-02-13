import React, { useState } from 'react'
import './index.css'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }
    let colour
    if (count > 0) {
        colour = "green"
    }
    if (count < 0) {
        colour = "red"
    }
    return (
        <div className="bg-container">
            <div className="counter-container">
                <h1 className={`counter ${colour}`}>{count}</h1>
                <div className="buttons-container">
                    <button type="button" className="button minus" onClick={decreaseCount}>-</button>
                    <button type="button" className="button plus" onClick={increaseCount}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter



