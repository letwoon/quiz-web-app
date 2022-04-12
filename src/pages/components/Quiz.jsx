import Typography from '@mui/material/Typography';
import QuizButton from './QuizButton';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import he from "he";


function Quiz(props) {

    return (
        <Box sx={{display: "flex", flexDirection:"column", alignItems:"flex-start", width:"97%"}}>
            {props.quizArray.map(quiz => {
                const { question, choices, id } = quiz;
                return (
                    <Box key={id}>
                        <Typography variant='h6'>
                            {/* decode using he package */}
                         {he.decode(question)} 
                        </Typography>
                        <QuizButton onChoices={choices}/>
                        <Divider variant="middle" sx={{ margin: 1 }} />
                    </Box>
                )
            })
            }
        </Box>
    )
}

export default Quiz;