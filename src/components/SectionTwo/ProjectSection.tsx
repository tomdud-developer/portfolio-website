import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Avatar, Container, Divider, Hidden, Slide} from "@mui/material";
import Stack from "@mui/material/Stack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProjectTab from "./projects/ProjectTab";
import OurKitchenYourHealthProject from "./projects/OurKitchenYourHealthProject";
import SpeedReadingAppProject from "./projects/SpeedReadingAppProject";
import PlanetfanCalculatorProject from "./projects/PlanetfanCalculatorProject";
import DxfGeneratorProject from "./projects/DxfGeneratorProject";
import CodeWarsProject from "./projects/CodeWarsProject";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            sx={{width: '80%'}}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='h5'>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
        color: '#fffffff',
        'fontSize': '50px',
    };
}

export const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: '16px',
}));

const ProjectSection: React.FC = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container sx={{maxWidth: "95%", minWidth: "95%", marginTop: "50px"}}>
            <Slide direction="down" in={true} style={{ transitionDelay: '300ms', transitionDuration: '2000ms'}} mountOnEnter unmountOnExit>
            <Paper
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.paper',
                    //display: 'flex',
                    minHeight: 800,
                    width: '100%',
                    padding: 1,
                    borderRadius: '20px',
                    boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
                }}
            >
                <Typography variant='h2' width='100%' margin='10px'>Projects</Typography>
                <Container sx={{display: 'flex', width: '100%', maxWidth: '100%', minWidth: '100%'}}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        sx={{ borderRight: 1, borderColor: 'divider', width: '20%' }}
                    >
                        <StyledTab label="Our Kitchen Your Health" {...a11yProps(0)} />
                        <StyledTab label="Speed Reading App" {...a11yProps(1)} />
                        <StyledTab label="Planetfan Calculator" {...a11yProps(2)} />
                        <StyledTab label="Dxf Generator" {...a11yProps(3)} />
                        <StyledTab label="Codewars" {...a11yProps(4)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <OurKitchenYourHealthProject />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SpeedReadingAppProject />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <PlanetfanCalculatorProject />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <DxfGeneratorProject />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <CodeWarsProject />
                    </TabPanel>
                </Container>
            </Paper>
            </Slide>
        </Container>
    );
};

export default ProjectSection;