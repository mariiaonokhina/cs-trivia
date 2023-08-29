/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react';
// import Context from './Context';

const Flashcard = () => {
    const [csvData, setCsvData] = useState([]);
    const [currCardIndex, setCurrCardIndex] = useState(Math.floor(Math.random() * csvData.length));
    const [showAnswer, setShowAnswer] = useState(false);
    // const { wasCardFlipped, setWasCardFlipped, wasCardChanged, setWasCardChanged } = useContext(Context);
      
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

                setCsvData(parsedData);
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        // if (wasCardChanged) {
        //     setCurrCardIndex(Math.floor(Math.random() * csvData.length));
        //     setWasCardChanged(!wasCardChanged);
        // }

        fetchData();
    }, []);
    // csvData.length, wasCardChanged, wasCardFlipped, setWasCardChanged

    // const flipCard = () => {
    //     setWasCardFlipped(!wasCardFlipped);
    // };

    return (
        <div className='App'>
            {csvData.length != 0? 
                <div className={`flip-card ${csvData[currCardIndex].difficulty}`} title={csvData[currCardIndex].    difficulty}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front" >
                            {/* Question */}
                            {csvData[currCardIndex].question}
                            {/* <p>Card changed? {wasCardChanged}</p> */}
                        </div>

                        <div className="flip-card-back">
                            {/* Answer */}
                            {csvData[currCardIndex].answer}
                            {/* <p>Card flipped? {wasCardFlipped}</p> */}
                        </div>
                    </div>
                </div>
            : <p>Loading...</p>}
        </div>
    )
}

export default Flashcard;