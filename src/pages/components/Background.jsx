import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';

const BackgroundPaper = styled(Paper)({
  backgroundColor: "#fafafa",
  maxWidth: 550,
  minHeight: 550,
  height: "max-content",
  margin: "20px auto",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "60px",
  padding: "40px 60px",
  zIndex: 0
});

const DecoPaperA = styled("div")({
  backgroundColor: "#DEEBF8",
  position: "absolute",
  height: 100,
  width: 100,
  borderRadius: "0 500px 0px 20px",
  bottom: 0,
  left: 0,
  zIndex: -1,
})


const DecoPaper2 = styled("div")({
  backgroundColor: "#FFFAD1",
  position: "absolute",
  height: 150,
  width: 150,
  borderRadius: "0 20px 0px 400px",
  top: 0,
  right: 0,
  zIndex: -1,
})

function Background({children}) {
    return (
        <BackgroundPaper elevation={4}>
          {children}
          <DecoPaperA />
          <DecoPaper2 />
        </BackgroundPaper>
    )
}

export default Background;