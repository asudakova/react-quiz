import React from 'react';
import '../Quiz/Quiz.scss';

const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="Quiz__progress">
        <div></div>
      </div>
      <h2 className="Quiz__title">Question</h2>
      <ul className="Quiz__answers">
        <li>Answer 1</li>
        <li>Answer 2</li>
        <li>Answer 3</li>
      </ul>
    </div>
  );
};

export default Quiz;