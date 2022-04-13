import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import he from "he";


function QuizButton(props) {
    const [selected, setSelected] = useState("");

    function handleSelect(event, newSelect) { //newSelect return the value of the toggle button
        console.log(newSelect);
        setSelected(newSelect);
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