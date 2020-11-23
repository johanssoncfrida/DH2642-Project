import TryingPres from './presenters/tryingPres'
import QuizModel from './model/quizModel'
const model = new QuizModel();

function App() {

  return (
    <div className="App">
      <TryingPres text={model}/>
    </div>
  );
}

export default App;
