import React, {useState, useContext, useEffect} from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/context";
function Quiz(){

    const {score,setScore, setGameState}= useContext(QuizContext)
    const [currQuestion, setCurrQuestion]= useState(0);
    const [choice,setChoice]=useState(-1);
    const [timeLeft, setTimeLeft] = useState(10);

    // useEffect(() => {
    //     if (timeLeft === 0) {
    //         if (currQuestion === Questions.length - 1) {
    //             handleFinish();
    //         } else {
    //             nextQuestion();
    //         }
    //         return;
    //     }

    //     const timer = setInterval(() => {
    //         setTimeLeft((prevTime) => prevTime - 1);
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, [timeLeft, currQuestion]);


    const nextQuestion =()=>{
        if (Questions[currQuestion].correctOption===choice){setScore(score+1)}
        setChoice(-1); 
        setCurrQuestion(currQuestion + 1);
        setTimeLeft(10);
    }

    const handleFinish =()=>{
        if (Questions[currQuestion].correctOption===choice){setScore(score+1)}
        setGameState("endScreen")
        
    }

    return (
    
    <div className="Quiz">
        <h2>{Questions[currQuestion].question}</h2>
        <div className="timer">Time Left: {timeLeft} seconds</div>
        <div className="options">
           <button className="opt" onClick={()=>setChoice(0)}>{Questions[currQuestion].options[0]}</button>
           <br></br>
           <br></br> 
           <button className="opt" onClick={()=>setChoice(1)}>{Questions[currQuestion].options[1]}</button> 
           <br></br>
           <br></br> 
           <button className="opt" onClick={()=>setChoice(2)}>{Questions[currQuestion].options[2]}</button>
           <br></br>
           <br></br>
           <button className="opt" onClick={()=>setChoice(3)}>{Questions[currQuestion].options[3]}</button> 


        </div>
        <br></br>
        {currQuestion == Questions.length-1?(<button className="fin-btn" onClick={handleFinish}>Finish</button>):
        (<div><button className="nxt-btn" onClick={nextQuestion}>Next</button>   <button className="fin-btn" onClick={handleFinish}>Finish</button></div>)}
    </div>

    )
}

export default Quiz;