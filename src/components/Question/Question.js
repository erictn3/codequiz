import React, { useState, useEffect, useRef } from 'react';

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetstep}) => {

  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);  
  }

  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select an option');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions -1) {
      onSetActiveQuestion(activeQuestion +1);
    } else {
      onSetstep(3);
    }
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.title}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light">
              <input type="radio" name="answer" value={choice} onChange={changeHandler}>
              </input>
              {choice}
            </label>
            ))} 
            {error && <div className="has-text-danger">{error}</div>}
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question;
