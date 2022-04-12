import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Home from './pages/Start_page';
import QuizPage from './pages/Quiz_pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';  
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';

const sessionToken = "f5ea4d784726da670c2175456d714fe2c668c0acaf67501f187ad916178f9c60";

function App() {



  const [quizArray, setQuizArray] = useState([])

  useEffect(() => {
    async function getQuiz() {
      try {
        // using axios get API request in useEffect
        const response = await axios.get("https://opentdb.com/api.php", {
          params: {
            amount: 5,
            difficulty: "easy",
            type: "multiple",
            token: sessionToken
          }
        })
        const quizDataArray = response.data.results;
        // restructuring the quiz object
        const newQuizDataArray = quizDataArray.map(quizData => {
          const { question, correct_answer, incorrect_answers } = quizData;
          const wrongOptionArray = incorrect_answers.map((answer) => {
            return {
              id: nanoid(),
              answer: answer,
              isCorrect: false
            }
          })

          const allOption = [
              {
                id: nanoid(),
                answer: correct_answer,
                isCorrect: true
              },
              ...wrongOptionArray
          ] 
          
          return {
            id: nanoid(),
            question: question,
            choices: allOption
          }
        })
        setQuizArray(newQuizDataArray)

      } catch(error) {
        console.log(error);
      }
    }
    getQuiz()
  } ,[])
  
  console.log(quizArray);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage onQuiz={quizArray} />} />
        </Routes>
    
      </Router>
    </ThemeProvider>

  );
}

export default App;
