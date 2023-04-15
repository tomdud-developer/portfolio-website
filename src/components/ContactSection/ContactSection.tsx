import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Avatar, Container, Divider, Hidden} from "@mui/material";
import Stack from "@mui/material/Stack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ContactSection: React.FC = () => {


    return (
        <Container>
            <Typography variant='h2' >Contact me</Typography>
            <Typography variant='h1' >Mail: tomasz.dudzik.it@gmail.com</Typography>

        </Container>
    );
};

export default ContactSection;