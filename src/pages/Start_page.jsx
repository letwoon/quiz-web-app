import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Background from './components/Background';


function Home() {
    const navigate = useNavigate();

    return (
        <Background>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                height: "40%",
                justifyContent: "center",
                alignItems: "center",
            }} >
                <Typography variant='h2' sx={{fontWeight:700}}>
                    Quizzical
                </Typography>
                <Typography variant='subtitle1'>
                    Test your knowledge
                </Typography>
                <Button sx={{marginY: 5}} onClick={()=> navigate("/quiz")} variant="contained" color="navy" size="large">Start quiz</Button>
            </Box>
        </Background>
    )
}

export default Home;