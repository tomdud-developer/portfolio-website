import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Zoom from "react-medium-image-zoom";
import {Container, ImageList, ImageListItem, Link} from "@mui/material";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from '@mui/icons-material/Description';
import HandymanIcon from '@mui/icons-material/Handyman';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

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
    technologies?: React.ReactNode;
    screenshots?: Array<any>;
    githubLink?: String;
    githubLink2?: String;
}
export default function ProjectTab({description,technologies, screenshots, githubLink, githubLink2}: ProjectTabProps) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabs = [
        {icon: <DescriptionIcon sx={{marginRight: '5px'}}/>, name: "Description", value: 0, isAvailable: !!description},
        {icon: <HandymanIcon sx={{marginRight: '5px'}}/>, name: "Technologies", value: 1, isAvailable: !!technologies},
        {icon: <ScreenshotMonitorIcon sx={{marginRight: '5px'}}/>, name: "Screenshots", value: 2, isAvailable: !!screenshots},
        {icon: <GitHubIcon sx={{marginRight: '5px'}}/>, name: "GitHub Repository", value: 3, isAvailable: !!githubLink},
    ].filter(tab => tab.isAvailable).map(tab => {
        return (
            <Tab
                value={tab.value}
                label={
                    <Stack direction="row" spacing={0} alignItems="center">
                        {tab.icon}
                        {tab.name}
                    </Stack>
                }
            />
        )
    })

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs"
            >
                {tabs}
            </Tabs>

            <TabPanel value={value} index={0}>
                {description}
            </TabPanel>
            {technologies && <TabPanel value={value} index={1}>
                {technologies}
            </TabPanel>}

            {screenshots && screenshots.length && <TabPanel value={value} index={2}>
                <ImageList sx={{ width: '100%', height: '500px' }} cols={3} rowHeight={200}>
                    {screenshots?.map((item) => (
                        <Zoom>
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}`}
                                    srcSet={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </Zoom>
                    ))}
                </ImageList>
            </TabPanel>}

            {githubLink && <TabPanel value={value} index={3}>
                <Stack spacing={2} sx={{alignItems:"center", justifyContent: "center", display:"flex"}}>
                    {/*<img src='https://cdn.svgporn.com/logos/github-icon.svg' alt='GitHub icon' height='100px' />*/}
                    <GitHubIcon sx={{fontSize: '100px'}} />
                    <Link href={githubLink.toString()} target="_blank" rel="noopener" underline="hover">
                        {githubLink}
                    </Link>
                    {githubLink2 &&
                        <Link href={githubLink2.toString()} target="_blank" rel="noopener" underline="hover">
                        {githubLink2}
                    </Link>}
                </Stack>
            </TabPanel>}


        </Box>
    );
}