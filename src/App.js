import React, { useState, useEffect } from 'react';
import './App.css';
// import Logic from './components/Logic';
import Question from './components/Question/Question';
// import Start from './components/Start/Start';
import quizData from './data/quiz.json';

import Start from './components/Start/Start';

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const quizStartHandler = () => {
    setStep(2);
  }

  return (
    <div className="App">
      {step ===1 && <Start onQuizStart={quizStartHandler} /> }
      {step ===2 && <Question
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetstep={setStep}
      
      />}
    </div>
  )
}

export default App;
