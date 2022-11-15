import React from 'react';

const Quiz = ({step, questions, checkAnswer}) => {
  const question = questions[step];
  const progress = Math.round(step / questions.length * 100);

  return (
    <div className="Quiz">
      <div className="Quiz__progress">
        <div style={{ width: `${progress}%`}}></div>
      </div>
      <h2 className="Quiz__title">{question.title}</h2>
      <ul className="Quiz__answers">
        {
          question.options.map((option, index) =>
            <li
              key={index}
              onClick={()=>checkAnswer(index, question.correct)}
            >
              {option}
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Quiz;