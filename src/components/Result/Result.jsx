import React from 'react';
import '../Result/Result.scss';
import smile1 from "../../img/smile-01.png";
import smile2 from "../../img/smile-02.png";
import smile3 from "../../img/smile-03.png";

const Result = ({setStep, correct, setCorrect, questionsLength}) => {

  function resultPic() {
    const part = Math.round(questionsLength / 3);
    if (correct > part * 2) {
      return smile1
    } else if (correct <= part * 2 && correct > part){
      return smile2
    } else if (correct <= part && correct >= 0) {
      return smile3;
    }
  }

  return (
    <div className="Result">
      <div className="Result__pic">
        <img src={resultPic()} alt="Result's pic"/>
      </div>
      <div className="Result__text">You've got {correct} out of {questionsLength}!</div>
      <button
        className="Result__btn"
        onClick={()=> {
          setStep(0);
          setCorrect(0)
        }}
      >
        Try again
      </button>
    </div>
  );
};

export default Result;