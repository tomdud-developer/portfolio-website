import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

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
            id={`vertical-tabpanel-nested-${index}`}
            aria-labelledby={`nested-vertical-tab-${index}`}
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
interface ProjectTabProps {
    description: React.ReactNode;
}
export default function ProjectTab({ description }: ProjectTabProps) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs"
            >
                <Tab value={0} label="Description" />
                <Tab value={1} label="Technologies" />
                <Tab value={2} label="Item Three" />
            </Tabs>
            <TabPanel value={value} index={0}>
                {description}
            </TabPanel>
            <TabPanel value={value} index={1}>

            </TabPanel>
            <TabPanel value={value} index={2}>

            </TabPanel>
        </Box>
    );
}