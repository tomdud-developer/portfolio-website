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
import ProjectTab from "./ProjectTab";

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
            sx={{width: '100%'}}
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

const SectionTwo: React.FC = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Typography variant='h2' >Projects</Typography>
            <Paper
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600, padding: 2 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <StyledTab label="Our Kitchen Your Health" {...a11yProps(0)} />
                    <StyledTab label="Item Two" {...a11yProps(1)} />
                    <StyledTab label="Item Three" {...a11yProps(2)} />
                    <StyledTab label="Item Four" {...a11yProps(3)} />
                    <StyledTab label="Item Five" {...a11yProps(4)} />
                    <StyledTab label="Item Six" {...a11yProps(5)} />
                    <StyledTab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Our Kitchen Your Health
                    <ProjectTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                    <ProjectTab />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                    <ProjectTab />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel>
            </Paper>
        </Container>
    );
};

export default SectionTwo;