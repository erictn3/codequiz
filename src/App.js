import React, { useState, useEffect } from 'react';
import './App.css';
// import Logic from './components/Logic';
import Question from './components/Question/Question';
// import Start from './components/Start/Start';
import quizData from './data/quiz.json';
import End from './components/End/End';
import Start from './components/Start/Start';

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step ===3 ) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000);
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
      {step ===3 && <End
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => {}}
        time={time}
      />}
    </div>
  )
}

export default App;
