import React, { useContext } from "react";
import { QuizContext } from "../helpers/context";
function EndScreen(){

    const {score, setScore, setGameState,setChoice,questions}= useContext(QuizContext)
    const handleRestart=()=>{

        setScore(0)
        setGameState("menu")
        setChoice("")
    }
    return (
    
    <div>
        <h2>Game Over !</h2>
        <h2>Your score : {score}/{questions.length}</h2>
        <button onClick={handleRestart}>Restart Quiz</button>
    </div>

    )
}

export default EndScreen ;