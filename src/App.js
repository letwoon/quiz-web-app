import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import Home from './pages/Start_page';
import QuizPage from './pages/Quiz_pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from './pages/components/Context/QuizContext';





function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <QuizProvider>
        <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage/>} />
          </Routes>
    
        </Router>
      </QuizProvider>  
    </ThemeProvider>

  );
}

export default App;
