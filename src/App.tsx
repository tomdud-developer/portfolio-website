import React, {useEffect} from 'react';
import './App.css';
import NavBar from "./components/Navbar";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {blue, grey, red, teal, yellow} from "@mui/material/colors";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ProjectSection from "./components/SectionTwo/ProjectSection";
import ContactSection from "./components/ContactSection/ContactSection";
import {Container, Slide} from "@mui/material";
import CvSection from "./components/CVsection/CvSection";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#F4D03F',
        },
        secondary: {
            main: teal[500],
        },
        error: {
            main: red[500],
        },
        warning: {
            main: yellow[500],
        },
        info: {
            main: grey[500],
        },
        success: {
            main: blue[500],
        },
        background: {
            paper: '#282c34',
            default: '#282s25',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
            disabled: '#6b7280',
        },
    },
    typography: {
        h1: {
            color: '#ffff',
            fontFamily: 'Courgette',
            textAlign: 'center',
        },
        h2: {
            color: '#ffffff',
            fontFamily: 'Courgette',
            textAlign: 'center',
        },
        h3: {
            color: '#ffffff',
            fontFamily: 'Courgette',
            textAlign: 'center',
        },
        h4: {
            color: '#ffffff',
            fontFamily: 'Courgette',
            textAlign: 'center',
        },
        h5: {
            color: '#ffffff',
            fontFamily: 'Courgette',
            textAlign: 'center',
        },
        body1: {
            fontWeight: 300,
            color: '#ffffff',
            textAlign: 'justify',
            fontFamily: 'Lato',
            fontSize: '20px',
        },
        button: {
            fontStyle: 'italic',
        },
    }
});

function App() {
    const [checked, setChecked] = React.useState(false);
    React.useEffect(() => {
        setChecked(true);
    }, []);

  return (
      <ThemeProvider theme={theme}>
        <Box
            className="App"
            bgcolor={theme.palette.background.paper}
            minHeight={'100%'}
        >
            <Stack>

                <Box
                    sx = {
                        {
                            marginTop: '50px'
                        }
                    }
                >
                    <Box>
                        <AboutMeSection />
                    </Box>
                    <Box>
                        <ProjectSection />
                    </Box>
                    <Box>
                        <CvSection/>
                    </Box>

                    <ContactSection />

                </Box>

            </Stack>
        </Box>
      </ThemeProvider>

  );
}

export default App;
