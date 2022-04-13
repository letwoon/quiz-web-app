import { createTheme, ThemeProvider } from '@mui/material/styles';

const myTheme = createTheme({
    typography: {
        fontFamily: "Lato"
    },
    palette: {
        navy: {
            main: "#4D5B9E",
            light: "#707bb1",
            dark: "#353f6e",
            contrastText: "#fff"
        },
        option: {
            main: "#293264",
            light: "#535b83",
            dark: "#1c2346",
        },
        text: {
            primary: "#293264"
        }
    },
    // style radio button as button element
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: "#293264",
                    margin: "5px 15px 0 0",
                    padding: "2px 8px",
                    width: "max-content",
                    borderStyle: "none",
                    border: "1px solid !important",
                    borderRadius: "13px!important",
                    '&.Mui-selected': {
                      backgroundColor: "#D6DBF5",
                      borderStyle: "none!important"
                    },
                    "&:hover": {
                      backgroundColor: "#D6DBF5",
                    },
                }
            },
        }
    },
})

export default myTheme;