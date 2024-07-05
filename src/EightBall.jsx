import React, { useState } from 'react'
import './EightBall.css'

const EightBall = ({ answers }) => {
    const [message, setMessage] = useState("Think of a question")
    const [background, setBackground] = useState("black")
    const randomIdx = () => {
        return Math.floor(Math.random() * answers.length)
    }
    const getResponse = () => {
        const idx = randomIdx()
        setMessage(answers[idx].msg)
        setBackground(answers[idx].color)
        console.log(idx)
    }
    return (
        <div className="EightBall">
            <button onClick={getResponse} className="EightBall-button" style={{backgroundColor: background}}>{message}</button>
        </div>
    )
};

export default EightBall;