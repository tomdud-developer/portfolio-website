import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    Avatar,
    Container,
    Divider,
    Hidden,
    IconButton,
    Link,
    Stack,
    Tabs,
    Tab,
    Typography,
    Box,
    Slide
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArticleIcon from '@mui/icons-material/Article'
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'background.paper',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
}));

const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Tomasz_Dudzik_CV.pdf`;
    link.href = "/Tomasz_Dudzik_CV.pdf";
    link.click();
};

const CvSection: React.FC = () => {
    return (
        <Container sx={{ paddingTop: '50px', paddingBottom: '50px', width: '95%', maxWidth: '95%', minWidth: '95%' }}>
            <Slide direction="down" in={true} style={{ transitionDelay: '300ms', transitionDuration: '1400ms'}} mountOnEnter unmountOnExit>
            <Item>
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                    <ArticleIcon fontSize='large' color='primary'/>
                    Check my CV
                </Typography>
                <Button onClick={onDownload} variant="contained" color="primary">
                    <DownloadIcon />
                    Download
                </Button>
            </Item>
            </Slide>
        </Container>
    );
};

export default CvSection;
