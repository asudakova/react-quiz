import React from 'react';
import '../Result/Result.scss';
import smile from "../../img/smile-01.png"

const Result = () => {
  return (
    <div className="Result">
      <div className="Result__pic">
        <img src={smile} alt="Result's pic"/>
      </div>
      <div className="Result__text">You've got 3 out of 10!</div>
      <button className="Result__btn">Try again</button>
    </div>
  );
};

export default Result;