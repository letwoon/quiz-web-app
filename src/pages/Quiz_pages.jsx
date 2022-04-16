import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Background from './components/Background';
import Quiz from './components/Quiz';
import CircularProgress from '@mui/material/CircularProgress'
import { useContext, useState, useEffect } from 'react';
import { QuizContext } from "./components/Context/QuizContext";
import he from "he";
import axios from 'axios';  
import { nanoid } from 'nanoid'


// A function to shuffle the array
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


function QuizPage(props) {
    const [quizData, setQuizData] = useContext(QuizContext);

    const [score, setScore] = useState(0);
    //if "check answer" is clicked then set quiz finish to true
    const [isFinish, setIsFinish] = useState(false);

    async function getQuiz() {
        try {
          // use axios get API request in useEffect
          const response = await axios.get("https://opentdb.com/api.php", {
            params: {
              amount: 5,
              difficulty: "easy",
              type: "multiple",
            }
          })
          const quizDataArray = response.data.results;

          //append other key that needed in the project, 
          //and an array that include all the answer into database ,
          //then shuffle the allAnswers array for render into choices button later 
          const newQuizData = quizDataArray.map((quiz) => {
            const answers = [quiz.correct_answer, ...quiz.incorrect_answers]
            const correctAnswer = he.decode(quiz.correct_answer)
            shuffleArray(answers)
            return {
              id: nanoid(),
              allAnswer: answers,
              correct_answer: correctAnswer,
              user_answer: "",
              user_isCorrect: false,
              ...quiz
            }
          })
          console.log(newQuizData);
          setQuizData(newQuizData);

        } catch(error) {
          console.log(error);
        }
    }     
  
    //call the trivia question api
    useEffect(() => {
      getQuiz()
    } ,[])


    //calculate the score after "check answer" is clicked
    function countScore() {
        setIsFinish(true);
        let currentScore = 0;
        setQuizData(prevQuiz => {
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
        console.log(quizData);
    }

    function restart() {
        setQuizData([]);
        setIsFinish(false);
        props.getQuiz();
    }

    return (
        <Background>
            {quizData.length === 0 ?
                <CircularProgress color="option" size="5rem" /> : 
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Quiz isFinish={isFinish} />
                    {isFinish ?
                        <Box>
                        <Typography variant='body1'>Your score: {score}/{quizData.length}</Typography>
                        <Button onClick={restart} sx={{ marginTop: 2 }} variant='contained' color="navy">Play again</Button>
                        </Box>
                        :
                        <Button onClick={countScore} sx={{ marginTop: 2 }} variant='contained' color="navy">Check Answer</Button>
                    }
            </Box>}
            
        </Background>

    )
}

export default QuizPage;