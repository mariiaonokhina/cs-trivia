/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const Flashcard = ({difficulty}) => {
    const [csvData, setCsvData] = useState([]);
    const [currCardIndex, setCurrCardIndex] = useState();
    const [wasCardFlipped, setWasCardFlipped] = useState(false);
      
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/questions.csv');
                const text = await response.text();

                const parsedData = [];
                text.trim().split('\n').forEach(line => {
                    const [difficulty, question, answer] = line.split('|');
                    parsedData.push({ difficulty, question, answer });
                });

                // Filter the parsed data based on selected difficulties
                const filteredData = parsedData.filter(item => difficulty.includes(item.difficulty));
                console.log(filteredData);
                setCsvData(filteredData);

                if (filteredData.length > 0) {
                    setCurrCardIndex(Math.floor(Math.random() * filteredData.length));
                }
                console.log(difficulty)
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchData();
    }, [difficulty]);

    const changeCard = () => {
        setWasCardFlipped(false);
        setCurrCardIndex(Math.floor(Math.random() * csvData.length));
    }

    return (
        <div className='Flashcard'>
            {csvData.length !== 0? 
                <div className='flip-card' 
                    title={csvData[currCardIndex].difficulty} 
                    onClick={() => setWasCardFlipped(!wasCardFlipped)}>

                    <div className={`flip-card-inner ${wasCardFlipped? 'show-answer': ''}`}>
                        <div className={`flip-card-front ${csvData[currCardIndex].difficulty}`} >
                            {/* Question */}
                            <p>{csvData[currCardIndex].question}</p>
                        </div>

                        <div className="flip-card-back">
                            {/* Answer */}
                            <p>{csvData[currCardIndex].answer}</p>
                        </div>
                    </div>
                </div>
            : <p>Loading...</p>}
            <button className="next-question-btn" onClick={changeCard}>Next Question</button>
        </div>
    )
}

export default Flashcard;