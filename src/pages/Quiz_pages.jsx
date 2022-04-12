import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Background from './components/Background';
import Quiz from './components/Quiz';

function QuizPage(props) {
    return (
        <Background>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Quiz quizArray={props.onQuiz} />
                <Button sx={{marginTop:2}} variant='contained' color="navy">Check Answer</Button>
            </Box>
        </Background>

    )
}

export default QuizPage;