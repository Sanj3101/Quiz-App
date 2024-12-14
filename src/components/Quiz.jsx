import React, { useState, useContext, useEffect } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/context";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Quiz() {
    const { score, setScore, setGameState, choice, setChoice } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [isSubmitted, setIsSubmitted] = useState(false); 

    // Timer
    useEffect(() => {
        if (timeLeft === 0) {
            if (currQuestion === Questions.length - 1) {
                handleFinish();
            } else {
                nextQuestion();
            }
            return;
        }

        if (isSubmitted) return; 
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, currQuestion, isSubmitted]);

    const handleSubmit = () => {
        if (Questions[currQuestion].correct_answers[choice] === "true") {
            Swal.fire({
                icon: "success",
                title: "Yay ...",
                text: "You got it correct!",
            });
            setScore(score + 1);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You got it wrong!",
            });
        }

        setIsSubmitted(true);
    };

    const nextQuestion = () => {
        setChoice(""); 
        setCurrQuestion(currQuestion + 1);
        setTimeLeft(10);
        setIsSubmitted(false);
    };

    const handleFinish = () => {
        setGameState("endScreen");
    };

    return (
        <div className="Quiz">
            <h2>{Questions[currQuestion].question}</h2>
            <div className="timer">Time Left: {timeLeft} seconds</div>
            <div className="options">
                <button className="opt" onClick={() => setChoice("answer_a_correct")} disabled={isSubmitted} >
                    {Questions[currQuestion].answers["answer_a"]}
                </button>
                <br /><br /> 
                <button className="opt" onClick={() => setChoice("answer_b_correct")} disabled={isSubmitted} >
                    {Questions[currQuestion].answers["answer_b"]}
                </button> 
                <br /><br /> 
                <button className="opt" onClick={() => setChoice("answer_c_correct")} disabled={isSubmitted} >
                    {Questions[currQuestion].answers["answer_c"]}
                </button>
                <br /><br />
                <button className="opt" onClick={() => setChoice("answer_d_correct")} disabled={isSubmitted}>
                    {Questions[currQuestion].answers["answer_d"]}
                </button>
                {Questions[currQuestion].answers["answer_e"] && (
                    <button className="opt" onClick={() => setChoice("answer_e_correct")} disabled={isSubmitted}>
                        {Questions[currQuestion].answers["answer_e"]}
                    </button>
                )}
                {Questions[currQuestion].answers["answer_f"] && (
                    <button className="opt" onClick={() => setChoice("answer_f_correct")} disabled={isSubmitted} >
                        {Questions[currQuestion].answers["answer_f"]}
                    </button>
                )}
            </div>
            <br />
            {currQuestion === Questions.length - 1 ? (
                <div> 
                    <button className="sub-btn" onClick={handleSubmit} disabled={isSubmitted}>Submit</button>   
                    <button className="fin-btn" onClick={handleFinish}>Finish</button>
                </div>
            ) : (
                <div> 
                    <button className="sub-btn" onClick={handleSubmit} disabled={isSubmitted}>Submit</button>   
                    <button className="nxt-btn" onClick={nextQuestion}>Next</button>   
                    <button className="fin-btn" onClick={handleFinish}>Finish</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;
