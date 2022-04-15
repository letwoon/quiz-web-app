import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Home from './pages/Start_page';
import QuizPage from './pages/Quiz_pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';  
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';
import he from "he";




// A function to shuffle the array
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function App() {

  const [quizArray, setQuizArray] = useState([]) //for collect the quiz database

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
      setQuizArray(newQuizData);
      
    } catch(error) {
      console.log(error);
    }
  }
  
  //call the trivia question api
  useEffect(() => {
    getQuiz()
  } ,[])
  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage onQuiz={quizArray} setQuizArray={setQuizArray} getQuiz={getQuiz}/>} />
        </Routes>
    
      </Router>
    </ThemeProvider>

  );
}

export default App;
