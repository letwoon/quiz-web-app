import { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizProvider(props) {
    const [quizData, setQuizData] = useState([]);

    return (
        <QuizContext.Provider value={[quizData, setQuizData]}>
            {props.children}
        </QuizContext.Provider>
    );
}