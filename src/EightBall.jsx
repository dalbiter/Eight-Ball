import React, { useState } from 'react'
import './EightBall.css'

const EightBall = ({ answers }) => {
    const [message, setMessage] = useState("Think of a question")
    const [background, setBackground] = useState("black")
    const [count, setCount] = useState(0)

    const randomIdx = () => {
        return Math.floor(Math.random() * answers.length)
    };

    const getResponse = () => {
        const idx = randomIdx()
        setMessage(answers[idx].msg)
        setBackground(answers[idx].color)
    };

    const reset = () => {
        setMessage("Think of a question")
        setBackground("black")
    };

    return (
        <div className="EightBall">
            <button onClick={getResponse}  className="EightBall-button" style={{backgroundColor: background}}>{message}</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

export default EightBall;