import Typography from '@mui/material/Typography';
import QuizButton from './QuizButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import he from "he";
import { nanoid } from 'nanoid';


function Quiz(props) {

    // add all option into one array and
    // shuffle the choices order
    let choicesButtons = props.quizArray.map((quiz) => {
        const { correct_answer, incorrect_answers } = quiz;
        const tempArray = [correct_answer, ...incorrect_answers];
        const shuffleArray = array => {
              for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
        }
        shuffleArray(tempArray)
        return tempArray
    })
    console.log(choicesButtons);

    //loop all the question and answer into a new array into html
    //then render that array into html
    const showAllQuiz = []
    for (let i = 0; i < props.quizArray.length; i++) {
        const { question } = props.quizArray[i]
        showAllQuiz.push(
            <Box key={nanoid()}>
                <Typography variant='h6'>
                    {he.decode(question)} {/* decode using "he" package */}
                </Typography>
                        
                <QuizButton onChoices={choicesButtons[i]} setQuizArray={props.setQuizArray} />
                <Divider variant="middle" sx={{ margin: 1 }} />
            </Box>
        )
    }


    return (
        <Box sx={{display: "flex", flexDirection:"column", alignItems:"flex-start", width:"97%"}}>
            {showAllQuiz}
        </Box>
    )
}

export default Quiz;