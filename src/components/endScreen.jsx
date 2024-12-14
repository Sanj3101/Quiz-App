import React, { useContext } from "react";
import { QuizContext } from "../helpers/context";
import { Questions } from "../helpers/QuestionBank";
function EndScreen(){

    const {score, setScore, setGameState,setChoice}= useContext(QuizContext)
    const handleRestart=()=>{

        setScore(0)
        setGameState("menu")
        setChoice("")
    }
    return (
    
    <div>
        <h2>Game Over !</h2>
        <h2>Your score : {score}/{Questions.length}</h2>
        <button onClick={handleRestart}>Restart Quiz</button>
    </div>

    )
}

export default EndScreen ;