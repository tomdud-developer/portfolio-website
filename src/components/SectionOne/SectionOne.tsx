import React from 'react';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Avatar, Container, Divider, Hidden, Slide} from "@mui/material";
import Stack from "@mui/material/Stack";
import {aboutMeText} from "../texts";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'background.paper',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
}));
//sx={{alignItems:"center", justifyContent: "center", display:"flex"}}
const SectionOne: React.FC = () => {
    return (
        <Container sx={{maxWidth: "90%", minWidth: "90%"}}>
            {//<Typography variant='h2' margin='10px'>About me</Typography>
            }
            <Grid container spacing={5} columns={{xs: 5, sm: 5, md: 10}}>
                <Grid xs={4}>
                    <Slide direction="right" in={true} style={{ transitionDelay: '1500ms', transitionDuration: '1000ms'}} mountOnEnter unmountOnExit>
                    <Item>
                        <Stack spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                            <Typography variant='h4'>
                                Hi <img src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="Animowany gif" />
                                , my name is Tom Dudzik
                            </Typography>
                            <Avatar
                                alt="Tom Dudzik"
                                src="https://raw.githubusercontent.com/tomdud-developer/portfolio-website/gh-pages/avatar_1.jpg"
                                sx={{width: '70%', height: "auto", border: '5px solid gold'}}
                                sizes='100% width'
                            />
                            <Typography variant='h4' >Full-Stack Developer</Typography>
                            <Typography variant='h5'>with solid Java backend</Typography>
                        </Stack>
                    </Item>
                    </Slide>
                </Grid>
                <Grid xs={6}>
                    <Slide direction="left" in={true} style={{ transitionDelay: '1500ms', transitionDuration: '1000ms'}} mountOnEnter unmountOnExit>
                    <Item>
                        <Stack spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                            <Typography variant='h4'>
                                About me
                            </Typography>
                            <Typography >
                                {aboutMeText}
                            </Typography>
                        </Stack>
                    </Item>
                    </Slide>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SectionOne;