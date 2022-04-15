import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Background from './components/Background';
import Quiz from './components/Quiz';
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react';

function QuizPage(props) {
    const [score, setScore] = useState(0)
    //if check answer is clicked then set quiz finish to true
    const [isFinish, setIsFinish] = useState(false) 


    function countScore() {
        setIsFinish(true);
        let currentScore = 0
        console.log(props.onQuiz);
        props.setQuizArray(prevQuiz => {
            return prevQuiz.map(quiz => {
                if (quiz.user_answer === quiz.correct_answer) {
                    currentScore++;
                    return {...quiz, user_isCorrect: true}
                } else {
                    return quiz
                }
            })
        })
        setScore(currentScore);
    }


    return (
        <Background>
            {props.onQuiz.length === 0 ?
                <CircularProgress color="option" size="5rem" /> : 
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Quiz quizArray={props.onQuiz} setQuizArray={props.setQuizArray} isFinish={isFinish} />
                    {isFinish &&
                        <Typography variant='body1'>Your score: {score}/{props.onQuiz.length}</Typography>
                    }
                    <Button onClick={countScore} sx={{ marginTop: 2 }} variant='contained' color="navy">Check Answer</Button>
            </Box>}
            
        </Background>

    )
}

export default QuizPage;