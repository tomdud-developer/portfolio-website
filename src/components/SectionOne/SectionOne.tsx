import React from 'react';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Avatar, Divider, Hidden} from "@mui/material";
import Stack from "@mui/material/Stack";
import {aboutMeText} from "../texts";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'background.paper',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    alignItems: "center",
    color: theme.palette.text.secondary,
    display: 'flex',
    width: '100%'
}));

const SectionOne: React.FC = () => {
    return (
        <Box>
            <Typography variant='h2' >About me</Typography>
            <Grid container spacing={2} columns={{xs: 5, sm: 5, md: 11}} sx={{ alignItems:"center", justifyContent: "center", display:"flex"}}>
                <Grid item xs={4} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                    <Item>
                        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{width: '100%'}}>
                            <Typography variant='h4'>
                                Hi <img src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="Animowany gif" />
                                , my name is Tom Dudzik
                            </Typography>
                            <Avatar
                                alt="Tom Dudzik"
                                src="/avatar_1_1.jpg"
                                sx={{width: '50%', height: "30%", border: '10px solid black'}}
                            />
                            <Typography variant='h4' >Full-Stack Developer</Typography>
                            <Typography variant='h5'>with solid Java backend</Typography>
                        </Stack>
                    </Item>
                </Grid>
                <Hidden xsDown smDown>
                    <Divider orientation="vertical" flexItem color='success' sx={{margin: "5"}}/>
                </Hidden>
                <Grid item xs={6} sx={{alignItems:"center", justifyContent: "center", display:"flex", margin: 0}}>
                    <Item>
                        <Stack spacing={2} alignItems="center" justifyContent="center">
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
        </Box>
    );
};

export default SectionOne;