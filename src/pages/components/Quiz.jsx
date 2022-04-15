import Typography from '@mui/material/Typography';
import QuizButton from './QuizButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import he from "he";



function Quiz(props) {

    //loop all the question and answer into a new array into html
    //then render that array into html
    const showAllQuiz = []
    for (let i = 0; i < props.quizArray.length; i++) {
        //destructuring
        const { question, id, allAnswer } = props.quizArray[i]
        showAllQuiz.push(
            <Box key={id}>
                <Typography variant='h6'>
                    {he.decode(question)} {/* decode using "he" package */}
                </Typography>
                        
                <QuizButton onChoices={allAnswer} onId={id} quizArray={props.quizArray} setQuizArray={props.setQuizArray} isFinish={props.isFinish}/>
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