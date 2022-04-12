import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import he from "he";


function QuizButton(props) {
    const [selected, setSelected] = useState("");

    function handleSelect(event, newSelect) { //newSelect return the value of the toggle button
        setSelected(newSelect);
    };

    return (
        <ToggleButtonGroup
          value={selected}
          onChange={handleSelect}  
          exclusive
          sx={{display:"flex", flexWrap:"wrap"}}  
        >
            {props.onChoices.map((choice) => {
                return (<ToggleButton  key={choice.id} value={he.decode(choice.answer)}>
                    {he.decode(choice.answer)}
                </ToggleButton>)
          })}
        </ToggleButtonGroup>
    )
}



export default QuizButton;