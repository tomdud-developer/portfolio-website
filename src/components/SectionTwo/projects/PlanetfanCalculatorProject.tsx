import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Container, ImageList, ImageListItem} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {projects_PlanetfanCalculator_description} from '../../texts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {projects_PlanetfanCalculator_description_fetures_list} from '../../texts';

export default function PlanetfanCalculatorProject() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const description = () => { return (
        <Container>
            <Typography>
                {projects_PlanetfanCalculator_description}
            </Typography>
            <Zoom>
                <img src={require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png')} width={'400px'}/>
            </Zoom>
            <Typography variant='h5' align='left'>Features:</Typography>
            {projects_PlanetfanCalculator_description_fetures_list}
        </Container>
      )
    }

    const screenshots = [
        {img: require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png'), title: 'Breakfast'},
        {img: require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png'), title: 'Breakfast'},
        {img: require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png'), title: 'Breakfast'},
        {img: require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png'), title: 'Breakfast'},
        {img: require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png'), title: 'Breakfast'},
        {img: require('./../../../assets/images/PlanetfanCalculatorProject_main_image.png'), title: 'Breakfast'},
    ];



    return (
        <Container>
            <ProjectTab
                description={description()}
                screenshots={screenshots}
            />
        </Container>
    );
}