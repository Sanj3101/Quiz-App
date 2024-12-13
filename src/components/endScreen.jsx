import React, { useContext } from "react";
import { QuizContext } from "../helpers/context";
function EndScreen(){

    const {score, setScore, setGameState}= useContext(QuizContext)
    const handleRestart=()=>{

        setScore(0)
        setGameState("menu")
    }
    return (
    
    <div>
        <h1>Yay Quiz Submited !</h1>
        <p>Your score : {score}</p>
        <button onClick={handleRestart}>Restart Quiz</button>
    </div>

    )
}

export default EndScreen ;