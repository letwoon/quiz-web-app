import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import he from "he";


function QuizButton(props) {
    const [selected, setSelected] = useState("");

    //check the answer every time user click the choices button,
    //if the answer is correct then set the checkAnswer to true by id,
    //if it's not correct then set it back to false 
    function handleSelect(event, newSelect) { //newSelect return the value of the toggle button
        setSelected(newSelect);
        props.quizArray.forEach((quiz) => {
            if (quiz.correct_answer === newSelect) {
                console.log("correct answer!");
                props.setCheckAnswer(prevResult => {
                    return prevResult.map((result) => {
                        return result.id === quiz.id ? {...result, isCorrect: true} : result
                    })
                })
            } else {
                props.setCheckAnswer(prevResult => {
                    return prevResult.map((result) => {
                        return result.id === quiz.id ? {...result, isCorrect: false} : result
                    })
                })
            }
        })
    };



    return (
        <ToggleButtonGroup
          value={selected}
          onChange={handleSelect}  
          exclusive
          sx={{display:"flex", flexWrap:"wrap"}}  
        >
            {props.onChoices.map((choice, index) => {
                return (<ToggleButton key={index} value={he.decode(choice)}>
                    {he.decode(choice)}
                </ToggleButton>)
          })}
        </ToggleButtonGroup>
    )
}



export default QuizButton;