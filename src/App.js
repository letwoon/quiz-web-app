import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Home from './pages/Start_page';
import QuizPage from './pages/Quiz_pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';  
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';


//TODO: Responsive Design
//TODO: time countdown mechanism
const sessionToken = "f5ea4d784726da670c2175456d714fe2c668c0acaf67501f187ad916178f9c60";

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

  const [quizArray, setQuizArray] = useState([])
  const [checkAnswer, setCheckAnswer] = useState([])

  

  useEffect(() => {
    async function getQuiz() {
      try {
        // using axios get API request in useEffect
        const response = await axios.get("https://opentdb.com/api.php", {
          params: {
            amount: 5,
            difficulty: "easy",
            type: "multiple",
            // token: sessionToken
          }
        })
        const quizDataArray = response.data.results;
        const newQuizData = quizDataArray.map((quiz) => {
          return {
            id: nanoid(),
            ...quiz
          }
        })
        console.log(newQuizData);
        setQuizArray(newQuizData);

        const allAnswer = []
        for (let i = 0; i < newQuizData.length; i++) {
          allAnswer.push({
            id: newQuizData[i].id,
            isCorrect: false
          })
        }
        setCheckAnswer(allAnswer);
        console.log(allAnswer);
        // setQuizArray(prev => console.log(prev));
      } catch(error) {
        console.log(error);
      }
    }
    getQuiz()
  } ,[])
  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage onQuiz={quizArray} setQuizArray={setQuizArray}/>} />
        </Routes>
    
      </Router>
    </ThemeProvider>

  );
}

export default App;
