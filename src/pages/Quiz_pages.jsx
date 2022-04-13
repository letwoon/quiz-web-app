import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Background from './components/Background';
import Quiz from './components/Quiz';
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react';

function QuizPage(props) {
    // const [checkAnswer, setCheckAnswer] = useState([])
    const [score, setScore] = useState(0)

    // const allAnswer = []
    // props.onQuiz.forEach((quiz) => {
    //     allAnswer.push(false)
    // });
    // console.log(allAnswer);
    // setCheckAnswer(allAnswer)

    function countScore() {
        console.log(props.onQuiz);
    }


    return (
        <Background>
            {props.onQuiz.length === 0 ?
                <CircularProgress color="option" size="5rem" /> : 
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Quiz quizArray={props.onQuiz} setQuizArray={props.setQuizArray}/>
                <Button onClick={countScore} sx={{marginTop:2}} variant='contained' color="navy">Check Answer</Button>
            </Box>}
            
        </Background>

    )
}

export default QuizPage;