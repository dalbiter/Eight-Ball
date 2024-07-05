import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import EightBall from './EightBall';
import answers from './answers'
import './App.css';

function App() {

  return (
    <>
      <EightBall answers={answers}/>  
    </>
  )
};

export default App
