import './styles/index.scss';
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import {useState} from "react";

const questions = [
  {
    title: 'To develop and run React code, Node.js is required.',
    options: ['False', 'True'],
    correct: 1
  },
  {
    title: 'What is the children prop?',
    options: ['A property that lets you pass data to child components', 'A property that adds child values to state', 'A property that lets you nest components in other components', 'A property that lets you set an object as a property'],
    correct: 2
  },
  {
    title: `A copy of the 'real' DOM that is kept in memory is called what?`,
    options: ['Virtual DOM', 'DOM', 'React DOM', 'Shadow DOM'],
    correct: 0
  },
  {
    title: `Naming convention for components`,
    options: ['camelCase', 'lowercase', 'snake_case', 'PascalCase'],
    correct: 3
  },
  {
    title: `When rendering a list using the JavaScript map() method, what is required for each element rendered?`,
    options: ['id', 'data', 'key', 'index'],
    correct: 2
  },
  {
    title: `Which operator can be used to conditionally render a React component?`,
    options: ['::', '&&', '||', '??'],
    correct: 1
  },
  {
    title: `React separates the user interface into components. How are components combinded to create a user interface?`,
    options: ['By nesting components', 'With code splitting', 'With webpack', 'By putting them in a folder structure'],
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
      <div className="App__container">
        <h1 className="App__title">Welcome to my quiz!</h1>
        <div className="App__card">
          {step !== questions.length ? (
            <Quiz
              step={step}
              questions={questions}
              checkAnswer={checkAnswer}
            />
          ) : (
            <Result
              correct={correct}
              questionsLength={questions.length}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
