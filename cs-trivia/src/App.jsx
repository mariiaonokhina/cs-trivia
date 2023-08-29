import {  useState, useCallback } from "react";
import Flashcard from "./Flashcard"

const App = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(['Beginner', 'Intermediate', 'Expert']);

  const handleToggle = useCallback((difficulty) => {
    setSelectedDifficulty(prevSelectedDifficulty => {
        if (prevSelectedDifficulty.includes(difficulty)) {
            // Unchecking a checkbox
            const updatedSelectedDifficulty = prevSelectedDifficulty.filter(diff => diff !== difficulty);
            if (updatedSelectedDifficulty.length === 0) {
                alert('You cannot uncheck all checkboxes!');
                return prevSelectedDifficulty;
            }
            return updatedSelectedDifficulty;
        } else {
            // Checking a checkbox
            return [...prevSelectedDifficulty, difficulty];
        }
    });
}, []);

  const isDifficultySelected = (difficulty) => {
    return selectedDifficulty.includes(difficulty);
  };

  return (
      <div className="App">
        <div className='game-description'>
        <h1>Computer Science Trivia!</h1>

        <h3>Choose difficulty:</h3>
          <div className="difficulty-container">
            <input type='checkbox' 
            className="difficulty" 
            name="Beginner" value="Beginner" 
            onChange={() => handleToggle('Beginner')} 
            checked={isDifficultySelected('Beginner')} />
            <label htmlFor="Beginner">Beginner</label><br></br>

            <input type='checkbox' 
            className="difficulty" 
            name="Intermediate" 
            value="Intermediate" 
            onChange={() => handleToggle('Intermediate')} 
            checked={isDifficultySelected('Intermediate')} />
            <label htmlFor="Intermediate">Intermediate</label><br></br>

            <input type='checkbox' 
            className="difficulty" 
            name="Expert" 
            value="Expert" 
            onChange={() => handleToggle('Expert')} 
            checked={isDifficultySelected('Expert')} />
            <label htmlFor="Expert">Expert</label><br></br>
          </div>
        </div>

        <Flashcard difficulty={selectedDifficulty}/>
      </div>
  )
}

export default App