import './styles/App.scss';
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Welcome to my quiz!</h1>
      <Quiz/>
      {/*<Result/>*/}
    </div>
  );
}

export default App;
