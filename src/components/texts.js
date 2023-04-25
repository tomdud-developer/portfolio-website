import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Link} from "@mui/material";
import OurKitchenYourHealthProject from "./SectionTwo/projects/OurKitchenYourHealthProject";
import * as React from "react";


export const aboutMeText = <>
    I'm a 23-year-old <strong>Computer Science student👨‍🎓</strong> at Silesian University of Technology. I also hold an <strong>engineering degree📜</strong> in Automatic and Robotic Control from the same institution.

    For the past three years, I have been immersing myself in the world of programming, with a particular <strong>focus on <img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='25px'/>Java backend development</strong>, but as well as some exposure to <strong>React.js</strong>. While I started my programming journey with C++, it wasn't long before I fell in love with <strong>❤️<img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='25px'/>Java</strong>. Currently, I'm honing my skills in Java <strong>microservices</strong> architecture and working on personal projects to further develop my abilities.

    My technology stack includes <img src='https://cdn.svgporn.com/logos/java.svg' alt='java_icon' height='25px'/>Java, along with various tools and frameworks used in backend microservices development. I'm passionate about building scalable and efficient software solutions, and I'm always seeking out new challenges to help me expand my knowledge and expertise.
</>

export const aboutMeFuturePlans = <>
    I am currently 🔎looking for an <strong>internship</strong> for the position of Junior Java Backend Developer. I feel that is a good moment to start my IT career, because it's the perfect way to take it my programming to the next ⭐level.
    In the near future, my goal is to become an <strong>expert</strong> in backend development, with a strong focus on mastering microservices, cloud technology, and Kubernetes. I am eager to expand my knowledge and skills in these areas to develop efficient and scalable applications.
</>
export const projects_OurKitchenYourHealth_description = "Our Kitchen - Your Health is a abstract company, which offer fresh food catering." +
    " They make your fresh, healthy meals and deliver to your house. This company need a strong, reliable system to: makes orders, manage orders, manage customers," +
    " manage meals, planning delivery.";

export const projects_SpeedReadingApp_description = <Typography><GitHubIcon /> Kitchen - Your Health is a abstract company, which offer fresh food catering. They make your fresh, healthy meals and deliver to your house. This company need a strong, reliable system to: makes orders, manage orders, manage customers, manage meals, planning delivery.</Typography>;


export const projects_PlanetfanCalculator_description =
    <>
        PlanetfanCalculator is a project developed for the internal needs of the Planetfan (<Link href='https://planetfan.pl'>https://planetfan.pl/</Link>) company. This calculator has been designed to assist Planetfan's engineers, architects, and contractors in converting values related to fans, densities, noise, flow, and engine power.
        The calculator simplifies the conversion process, making it quicker and more efficient for the team to work with. By providing accurate results, Planetfan can optimize their ventilation systems and deliver the best possible solutions to their clients.
    </>

export const projects_PlanetfanCalculator_description_fetures_list =
    <>
        <ul>
            <li>Scaling fan parameters</li>
            <li>Calculating air density by three methods</li>
            <li>Acoustic calculations:
                <ul>
                    <li>Acoustic power</li>
                    <li>Sound level at a point</li>
                    <li>Variation of acoustic pressure with distance. Point source</li>
                    <li>Variation of acoustic pressure with distance. Line source</li>
                    <li>Correction of acoustic power based on diameter</li>
                    <li>Correction of acoustic power based on speed</li>
                    <li>Correction of acoustic power based on the number of sources</li>
                    <li>Circumferential velocity</li>
                    <li>Calculation of distance from the source</li>
                </ul>
            </li>
            <li>Calculating mass of different types elements in construct engineering</li>
            <li>Calculating flow efficiency</li>
            <li>Calculating electricity power of motor by known current</li>
        </ul>
    </>

export const projects_PlanetfanCalculator_githubLink = "https://github.com/tomdud-developer/PlanetfanCalculator-public";

export const projects_DxfGenerator_description = "DxfGenerator is a specialized project designed to fulfill the specific requirements of Planetfan, a company that deals with fan manufacturing (https://planetfan.pl/). The purpose of DxfGenerator is to generate CAD DXF files for nameplates that are attached to the fans. The data required for the nameplates is stored in an Excel spreadsheet, and the program retrieves the necessary information from the spreadsheet.\n" +
    "\n" +
    "Once the data is collected, DxfGenerator creates a DXF file that can be used with Computer-Aided Manufacturing (CAM) software. This software is then utilized to generate toolpaths that are necessary for mechanical milling machines to engrave the nameplates onto the fans.\n" +
    "\n" +
    "In summary, DxfGenerator is a software tool that helps Planetfan automate the process of generating nameplates for its fans by extracting data from an Excel spreadsheet and converting it into a DXF file that can be used by CAM software and mechanical milling machines for engraving."

export const projects_DxfGenerator_githubLink = "https://github.com/tomdud-developer/DxfGeneratorV2-public"
export const projects_SpeedReadingAppProject_githubLink = "https://github.com/tomdud-developer/speed-reading-app";


export const projects_SpeedReadingAppProject_description="The work aims to design and create a web application that allows you to learn and improve your speed reading skills. The app offers tools to measure reading speed and text comprehension. The implemented exercises focus on accelerating perception, expanding the field of vision, excluding phonetization and regression. The application user has the option of following a training plan consisting of 21 sessions. The application is divided into two parts, backend and frontend. The backend of the application was created in Java using the Spring package. The frontend part of the application uses the React.js library. Communication between the two components takes place via the REST API. The system consisting of a database, backend and frontend application was implemented on a home server using Docker containerization technology."
export const projects_SpeedReadingAppProject_description_fetures_list =
    <Typography>
        <ul>
            <li>Non-functional requirements:
                <ul>
                    <li>Three-tier system architecture</li>
                    <li>Use of Docker for application containerization</li>
                    <li>Implementation of a security protocol based on JWT token</li>
                    <li>User interface color scheme in accordance with guidelines</li>
                    <li>Automated testability of the backend application</li>
                    <li>Persistent storage of user data</li>
                </ul>
            </li>
            <li>Functional requirements:
                <ul>
                    <li>Ability to perform exercises that increase perception and reduce regression</li>
                    <li>Ability to perform exercises that expand the field of view</li>
                    <li>Ability to measure reading parameters</li>
                    <li>Ability to track progress on a timeline chart</li>
                    <li>Ability to change exercise difficulty scale</li>
                    <li>Ability to import user text used in exercises</li>
                    <li>Ability to perform exercises according to a training plan</li>
                    <li>Ability to reset progress in the training plan</li>
                </ul>
            </li>

        </ul>
    </Typography>

export const projects_SpeedReadingAppProject_githubLink2 = "https://github.com/tomdud-developer/speed-reading-app-frontend";


export const projects_OurKitchenYourHealthProject_githubLink = "https://github.com/tomdud-developer/OurKitchenYourHealth";
export const projects_OurKitchenYourHealthProject_description = "Our Kitchen - Your Health is a unique FICTIONAL catering company that specializes in providing fresh and healthy meals for its customers. Their primary focus is on ensuring that their customers receive only the best quality food that is both delicious and nutritious. To achieve this goal, they have developed a strong and reliable system that takes care of everything from ordering to delivery.";

export const projects_OurKitchenYourHealthProject_description2 =  "The system that Our Kitchen - Your Health uses is designed to manage all aspects of the catering process, from taking orders and managing customers to planning deliveries and supplies."
export const projects_OurKitchenYourHealthProject_description3 = "To ensure high accessibility and handle a large volume of requests, I opted for a microservice architecture in developing the backend project. " +
    "For this purpose, I chose to use Java as the programming language. By using microservices, the system can be designed to handle specific tasks independently," +
    " making it more scalable and flexible. This approach also allows for easy maintenance and updates, as each microservice can be modified without affecting the others. Overall," +
    " the use of microservices in Java provides a reliable and efficient framework to develop a robust backend system."

export const projects_OurKitchenYourHealthProject_requirements =
    <Typography>
        The customer is the owner of approximately 100 restaurants and serves daily diet meals over the phone. The demand for their services has consistently increased, and as a result, they require reliable software support to manage these orders. The orders should be taken on a website, where clients can potentially choose their preferred meals for each day. The restaurant location, which will serve the meals, should be assigned based on the client's domicile.
        <br/><br/>
        The dietetics team should have the option to compose meals by adding ingredients and substances. These meals should be available for every client at any location.
        <br/><br/>
        After take an order by client, he should confirm order by clicking link in email message, after that he could process the payment in PayU. After payment Order Status change to success payment and it can be processed to realisation.
        <br/><br/>
        Once a client places an order, they must confirm it by clicking a link in an email message. Upon confirmation, they can proceed to make the payment via PayU. After a successful payment, the order status will be updated to "success payment" and can be processed for realization.
        <br/><br/>
        To ensure the smooth running of operations, the restaurants must have a daily list of ingredients and meals that they need to order and prepare for the following day. This practice allows for proper planning and organization of resources, ensuring that the restaurants are adequately stocked and prepared to meet the demands of their customers.
    </Typography>
