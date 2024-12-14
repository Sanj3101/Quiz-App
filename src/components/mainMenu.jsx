import React, {useContext} from "react";
import { QuizContext } from "../helpers/context.jsx";

function MainMenu(){
    const {gameState, setGameState}= useContext(QuizContext)
    return (
    
   <>
    <h2>Welcome to the Quiz !</h2>
    <button onClick={()=>{setGameState("quiz")}}>Start Quiz !</button>

   </>
    )
}

export default MainMenu;