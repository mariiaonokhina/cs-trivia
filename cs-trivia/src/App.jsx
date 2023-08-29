import { useEffect } from "react";
import Flashcard from "./Flashcard"
// import ContextProvider from './ContextProvider';
// import Context from "./Context";
/* eslint-disable no-unused-vars */

const App = () => {
  // const { wasCardFlipped, setWasCardFlipped, wasCardChanged, setWasCardChanged } = useContext(Context);

  useEffect(() => {

  }, []);

  // const flipCard = () => {
  //   setWasCardFlipped(!wasCardFlipped);
  // };

  // const changeCard = () => {
  //   setWasCardChanged(!wasCardChanged);
  // };

  return (
      <div className="App">
        <div className='game-description'>
        <h1>Computer Science Trivia!</h1>

        <h3>Choose difficulty:</h3>
          <div className="difficulty-container">
            <input type='checkbox' className="difficulty" name="easy" value="Easy" />
            <label htmlFor="easy">Easy</label><br></br>

            <input type='checkbox' className="difficulty" name="intermediate" value="Intermediate" />
            <label htmlFor="intermediate">Intermediate</label><br></br>

            <input type='checkbox' className="difficulty" name="expert" value="Expert" />
            <label htmlFor="expert">Expert</label><br></br>
          </div>
        </div>

        <Flashcard/>
        <button className="next-question-btn">Next Question</button>
      </div>
  )
}

export default App
