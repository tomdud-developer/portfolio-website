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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'background.paper',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
}));

const ContactSection: React.FC = () => {
    return (
        <Container sx={{ paddingTop: '50px', paddingBottom: '50px', width: '95%', maxWidth: '95%', minWidth: '95%' }}>
            <Slide direction="down" in={true} style={{ transitionDelay: '300ms', transitionDuration: '1500ms'}} mountOnEnter unmountOnExit>
            <Item>
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                    <HandshakeIcon fontSize='large' color='primary'/>
                    Contact me
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                            <EmailIcon />
                            <Link href="mailto:tomasz.dudzik.it@gmail.com" underline="hover">
                                tomasz.dudzik.it@gmail.com
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                            <GitHubIcon />
                            <Link href="https://github.com/tomdud-developer" target="_blank" rel="noopener" underline="hover">
                                My github: tomdud-developer
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                            <LinkedInIcon />
                            <Link href="https://linkedin.com/in/tomasz-dudzik-4675a8273" target="_blank" rel="noopener" underline="hover">
                                LinkedIn profile
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Item>
            </Slide>
        </Container>
    );
};

export default ContactSection;
