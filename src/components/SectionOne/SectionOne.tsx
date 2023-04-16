import React from 'react';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Avatar, Container, Divider, Hidden} from "@mui/material";
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
        <Container sx={{maxWidth: "80%", minWidth: "80%"}}>
            {//<Typography variant='h2' margin='10px'>About me</Typography>
            }
            <Grid container spacing={5} columns={{xs: 5, sm: 5, md: 10}}>
                <Grid xs={4}>
                    <Item>
                        <Stack spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                            <Typography variant='h4'>
                                Hi <img src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="Animowany gif" />
                                , my name is Tom Dudzik
                            </Typography>
                            <Avatar
                                alt="Tom Dudzik"
                                src="/avatar_1.jpg"
                                sx={{width: '70%', height: "auto", border: '5px solid gold'}}
                                sizes='100% width'
                            />
                            <Typography variant='h4' >Full-Stack Developer</Typography>
                            <Typography variant='h5'>with solid Java backend</Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Grid xs={6}>
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default SectionOne;