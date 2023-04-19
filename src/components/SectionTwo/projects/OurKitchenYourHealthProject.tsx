import * as React from "react";
import {Container, Link} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {
    projects_OurKitchenYourHealthProject_description, projects_OurKitchenYourHealthProject_githubLink,
} from '../../texts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export default function OurKitchenYourHealthProject() {

    const description = () => { return (
        <Container>
            <Typography>
                {projects_OurKitchenYourHealthProject_description}
            </Typography>


        </Container>
    )
    }

    const technologies = () => { return (
        <Typography>
            <ul >
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Common:</Typography>
                    <ul>
                        <li>Java<img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='30px'/></li>
                        <li>Spring Boot<img src='https://cdn.svgporn.com/logos/spring.svg' alt='spring_icon' height='30px'/></li>
                        <li>Spring Security</li>
                        <li>JWT Token</li>
                        <li>Oauth2.0 Flow</li>
                        <li>MongoDB and MongoExpress</li>
                        <li>PostgreSQL</li>
                        <li>Reactive programming</li>
                    </ul>
                </li>
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Microservices:</Typography>
                    <ul>
                        <li>Spring Api Gateway</li>
                        <li>Distributed tracing - Zipkin</li>
                        <li>Auth Service - Keycloak</li>
                        <li>Spring Oauth2 Client and Resource Service</li>
                        <li>Discovery Service - Eureka</li>
                        <li>OpenFeign</li>
                        <li>WebClient for reactive API</li>
                        <li>OKHttp and Rest client</li>
                        <li>Kafka and Zookeeper</li>
                    </ul>
                </li>
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Deployment:</Typography>
                    <ul>
                        <li>Docker</li>
                    </ul>
                </li>
                <li><Typography variant='h5' marginTop='20px' color='primary' align='left'>Other:</Typography>
                    <ul>
                        <li>Postman</li>
                        <li>Integration with PayU</li>
                    </ul>
                </li>

            </ul>
        </Typography>
    )
    }

    const screenshots = [

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
                githubLink={projects_OurKitchenYourHealthProject_githubLink}
            />
        </Container>
    );
}