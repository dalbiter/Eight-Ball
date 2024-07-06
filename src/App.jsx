import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import EightBall from './EightBall';
import answers from './answers'
import './App.css';

function App() {

  return (
    <>
      <h1>The Magic Eight Ball</h1>
      <h4>Think of a question, then click on the ball below for the answer</h4>
      <EightBall answers={answers}/>  
    </>
  )
};

export default App
