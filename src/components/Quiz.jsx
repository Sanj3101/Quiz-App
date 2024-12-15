import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "../helpers/context";
import Swal from 'sweetalert2';

function Quiz() {
    const { score, setScore, setGameState, choice, setChoice,questions, setQuestions } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(15);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Fetch Questions from API
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("https://quizapi.io/api/v1/questions?apiKey=W4fjxXn5Y1NVzGcJpldKrkhv2nRzLRAsopRi2PWu&category=react&difficulty=Easy&limit=3");
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Fetch Questions",
                    text: "Please check your internet connection or try again later.",
                });
            } finally {
                setLoading(false); 
                console.log(questions);
            }
        };

        fetchQuestions();
    }, []);

    // Timer logic
    useEffect(() => {
        if (loading || questions.length === 0) return;

        if (timeLeft === 0) {
            if (currQuestion === questions.length - 1) {
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
    }, [timeLeft, currQuestion, isSubmitted, loading, questions]);

    const handleSubmit = () => {
        if (questions[currQuestion].correct_answers[choice] === "true") {
            Swal.fire({
                icon: "success",
                title: "Yay ...",
                text: "You got it correct!",
            });
            setScore((prevScore) => prevScore + 1);
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
        setCurrQuestion((prev) => prev + 1);
        setTimeLeft(15);
        setIsSubmitted(false);
    };

    const handleFinish = () => {
        setGameState("endScreen");
    };

    // Render loading state
    if (loading) {
        return <div>Loading Questions...</div>;
    }

    return (
        <div className="Quiz">
            <h2>{questions[currQuestion].question}</h2>
            <div className="timer">Time Left: {timeLeft} seconds</div>
            <div className="options">
                {Object.entries(questions[currQuestion].answers).map(([key, value]) => (
                    value && (
                        <button
                            key={key}
                            className="opt"
                            onClick={() => setChoice(`${key}_correct`)}
                            disabled={isSubmitted}
                        >
                            {value}
                        </button>
                    )
                ))}
            </div>
            <br />
            {currQuestion === questions.length - 1 ? (
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
