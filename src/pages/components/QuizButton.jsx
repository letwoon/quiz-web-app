import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import he from "he";


function QuizButton(props) {
    const [selected, setSelected] = useState("");

    //check the user answer every time user click the choices button,
    // set the user answer into Quiz Data
    function handleSelect(event, newSelect) { //newSelect return the value of the toggle button
        setSelected(newSelect);
        const { id, value } = event.target;
        props.setQuizArray(prevQuiz => {
            return prevQuiz.map(quiz => {
                if (id === quiz.id) {
                    return { ...quiz, user_answer: value }
                } else {
                    return quiz
                }
            })
        })
    };

    // change the correct answer's background color after "check answer" is clicked
    function showCorrectAnswer(choice) {
        let correctAnswerBackground;
        if (props.isFinish) {
            props.quizArray.forEach(quiz => {
            if (choice === quiz.correct_answer) {
                correctAnswerBackground = 
                     {
                      backgroundColor: "#F8BCBC",
                      borderStyle: "none!important"
                    }
            }
        })
        }
        return correctAnswerBackground;
}


    return (
        <ToggleButtonGroup
          value={selected}
          onChange={handleSelect}  
          exclusive
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
            {props.onChoices.map((choice, index) => {
                return (<ToggleButton key={index} sx={showCorrectAnswer(he.decode(choice))} id={props.onId} value={he.decode(choice)}>
                    {he.decode(choice)}
                </ToggleButton>)
          })}
        </ToggleButtonGroup>
    )
}



export default QuizButton;