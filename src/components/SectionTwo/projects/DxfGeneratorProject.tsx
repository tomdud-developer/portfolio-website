import * as React from "react";
import {Container} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {projects_DxfGenerator_description} from '../../texts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {projects_PlanetfanCalculator_description_fetures_list} from '../../texts';
import {projects_PlanetfanCalculator_githubLink} from '../../texts';


export default function DxfGeneratorProject() {

    const description = () => { return (
        <Container>
            <Typography>
                {projects_DxfGenerator_description}
            </Typography>
            <Zoom>
                <img src={require('./../../../assets/images/DxfGeneratorProject/20221027_085308.jpg')} width={'400px'}/>
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
                    <li>costam dsx</li>
                </ul>
            </Typography>
        )
    }

    const screenshots = [
            '20221018_151009.jpg',
            '20221025_125914.jpg',
            '20221027_085308.jpg',
            'Screenshot 2023-04-18 091320.png',
            'Screenshot 2023-04-18 091554.png',
            'Screenshot 2023-04-18 100202.png',
            'Screenshot 2023-04-18 101624.png',
            'Screenshot 2023-04-18 101641.png',
            'Screenshot 2023-04-18 102008.png'
        ].map((fileName) => {
            return {
                img: require(`./../../../assets/images/DxfGeneratorProject/${fileName}`), title: fileName
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