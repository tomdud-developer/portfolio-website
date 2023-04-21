import * as React from "react";
import {Container, Link} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {
    projects_SpeedReadingAppProject_description,
    projects_SpeedReadingAppProject_description_fetures_list
} from '../../texts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {projects_PlanetfanCalculator_description_fetures_list} from '../../texts';
import {projects_SpeedReadingAppProject_githubLink} from '../../texts';
import {projects_SpeedReadingAppProject_githubLink2} from '../../texts';
import GitHubIcon from "@mui/icons-material/GitHub";


export default function SpeedReadingAppProject() {

    const description = () => { return (
        <Container>
            <Typography>
                {projects_SpeedReadingAppProject_description}
            </Typography>
            <Zoom>
                <img src={require('./../../../assets/images/SpeedReadingAppProject/Fonetization_remover.png')} width={'400px'}/>
            </Zoom>

            <Typography variant='h5' align='left' marginTop='20px' color='primary'>Requirements and futures:</Typography>
            {projects_SpeedReadingAppProject_description_fetures_list}

            <Typography variant='h5' align='left' marginTop='20px' color='primary'>Architecture</Typography>
            <Zoom>
                <img src={require('./../../../assets/images/SpeedReadingAppProject/full_app_structure_diagram.png')} width={'400px'}/>
            </Zoom>
            <Typography variant='h5' marginTop='20px' color='primary'>More on github:</Typography>
            <Link href={projects_SpeedReadingAppProject_githubLink} target="_blank" rel="noopener" underline="hover">
                {projects_SpeedReadingAppProject_githubLink}
            </Link>

        </Container>
    )
    }

    const technologies = () => { return (
        <Typography>
            <ul >
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Backend:</Typography>
                    <ul>
                        <li>Java<img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='30px'/></li>
                        <li>Spring<img src='https://cdn.svgporn.com/logos/spring.svg' alt='spring_icon' height='30px'/></li>
                        <li>Spring Boot</li>
                        <li>Tomcat</li>
                        <li>Spring Security</li>
                        <li>Gradle</li>
                        <li>PostgreSQL</li>
                        <li>Mockito<img src='https://github.com/mockito/mockito.github.io/raw/master/img/logo%402x.png' alt='mockito_icon' height='30px'/></li>
                        <li>JUnit</li>
                        <li>JWT Token</li>
                    </ul>
                </li>
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Frontend:</Typography>
                    <ul>
                        <li>React.js</li>
                        <li>Axios</li>
                        <li>npm</li>
                        <li>Material UI</li>
                    </ul>
                </li>
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Deployment:</Typography>
                    <ul>
                        <li>Initialy</li>
                            <ul>
                                <li>Heroku</li>
                                <li>Firebase</li>
                            </ul>
                        <li>Now</li>
                        <ul>
                            <li>Ubuntu Server</li>
                            <li>Docker</li>
                            <li>Local Xpose</li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </Typography>
    )
    }

    const screenshots = [
        "moreScreens/Columns_numbers.png",
        "moreScreens/Disappering_numbers.png",
        "moreScreens/Fast_words.png",
        "moreScreens/Fonetization_remover.png",
        "moreScreens/History_speedmeterlogs_chart.png",
        "moreScreens/Pointer_basic.png",
        "moreScreens/Pyramid_numbers.png",
        "moreScreens/Reading_speed_meter.png",
        "moreScreens/Schultz_arrays.png",
        "moreScreens/Understand_level_meter.png",
        "database_erd_diagram.png",
        "Fonetization_remover.png",
        "full_app_structure_diagram.png",
        "History_speedmeterlogs_chart.png",
        "Layout_overview.png",
        "spring_boot_architecture.png",
        "Tests_Coverage_raport.png",
        "Tests_raport.png",
        "theme_colors.png"
    ].map((fileName) => {
        return {
            img: require(`./../../../assets/images/SpeedReadingAppProject/${fileName}`), title: fileName
        }
    })

    return (
        <Container>
            <ProjectTab
                description={description()}
                screenshots={screenshots}
                technologies={technologies()}
                githubLink={projects_SpeedReadingAppProject_githubLink}
                githubLink2={projects_SpeedReadingAppProject_githubLink2}
            />
        </Container>
    );
}