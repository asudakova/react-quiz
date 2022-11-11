import './styles/App.scss';
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import {useState} from "react";

const questions = [
  {
    title: 'What does HTML stand for?',
    options: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language'],
    correct: 1
  },
  {
    title: 'Choose the correct HTML element for the largest heading:',
    options: ['<h6>', '<head>', '<h1>', '<header>'],
    correct: 2
  },
  {
    title: 'How do you write "Hello World" in an alert box?',
    options: ['alert("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");', 'msgBox("Hello World");'],
    correct: 0
  },
]

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const checkAnswer = (chosenAnswer, correctAnswer) => {
    if (chosenAnswer === correctAnswer) {
      setCorrect(correct + 1)
    }
    setStep(step + 1);
  }

  return (
    <div className="App">
      <h1 className="App__title">Welcome to my quiz!</h1>
      {step !== questions.length ? (
        <Quiz
          step={step}
          questions={questions}
          checkAnswer={checkAnswer}
        />
      ) : (
        <Result
          setStep={setStep}
          correct={correct}
          setCorrect={setCorrect}
          questionsLength={questions.length}
        />
      )}
    </div>
  );
}

export default App;
