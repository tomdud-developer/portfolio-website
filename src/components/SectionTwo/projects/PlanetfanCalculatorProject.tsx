import * as React from "react";
import {Container} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {projects_PlanetfanCalculator_description} from '../../texts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {projects_PlanetfanCalculator_description_fetures_list} from '../../texts';
import {projects_PlanetfanCalculator_githubLink} from '../../texts';


export default function PlanetfanCalculatorProject() {

    const description = () => { return (
        <Container>
            <Typography>
                {projects_PlanetfanCalculator_description}
            </Typography>
            <Zoom>
                <img src={require('./../../../assets/images/PlanetfanCalculatorProject/PlanetfanCalculatorProject_main_image.png')} width={'400px'}/>
            </Zoom>
            <Typography variant='h5' align='left'>Features:</Typography>
            {projects_PlanetfanCalculator_description_fetures_list}
        </Container>
      )
    }

    const technologies = () => { return (
            <Typography>
                <ul>
                    <li>Java <img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='50px'/></li>
                    <li>JavaFx</li>
                    <li>Launch4j</li>
                </ul>
            </Typography>
        )
    }

    const screenshots = [
            'PlanetfanCalculatorProject_main_image.png',
            'Screenshot 2023-04-17 184851.png',
            'Screenshot 2023-04-17 184856.png',
            'Screenshot 2023-04-17 184900.png',
            'Screenshot 2023-04-17 184903.png',
            'Screenshot 2023-04-17 184913.png',
            'Screenshot 2023-04-17 184917.png',
            'Screenshot 2023-04-17 184922.png',
            'Screenshot 2023-04-17 184926.png',
            'Screenshot 2023-04-17 184928.png'
        ].map((fileName) => {
            return {
                img: require(`./../../../assets/images/PlanetfanCalculatorProject/${fileName}`), title: fileName
            }
        })

    return (
        <Container>
            <ProjectTab
                description={description()}
                screenshots={screenshots}
                technologies={technologies()}
                githubLink={projects_PlanetfanCalculator_githubLink}
            />
        </Container>
    );
}