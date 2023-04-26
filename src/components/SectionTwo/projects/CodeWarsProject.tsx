import * as React from "react";
import {Container} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {
    projects_CodeWars_description,
    projects_CodeWars_githubLink,
    projects_PlanetfanCalculator_description
} from '../../texts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {projects_PlanetfanCalculator_description_fetures_list} from '../../texts';
import {projects_PlanetfanCalculator_githubLink} from '../../texts';


export default function CodeWarsProject() {

    const description = () => { return (
        <Container>
            <Typography>
                {projects_CodeWars_description}
            </Typography>
            <Zoom>
                <img src={require('./../../../assets/images/CodeWarsProject/CodeWarsScreenshot.png')} width={'400px'}/>
            </Zoom>
        </Container>
      )
    }

    const technologies = () => { return (
            <Typography>
                <ul>
                    <li>Java <img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='50px'/></li>
                </ul>
            </Typography>
        )
    }

    const screenshots = [
            'CodeWarsScreenshot.png'
        ].map((fileName) => {
            return {
                img: require(`./../../../assets/images/CodeWarsProject/${fileName}`), title: fileName
            }
        })

    return (
        <Container>
            <ProjectTab
                description={description()}
                screenshots={screenshots}
                technologies={technologies()}
                githubLink={projects_CodeWars_githubLink}
            />
        </Container>
    );
}