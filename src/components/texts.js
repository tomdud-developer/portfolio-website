import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Link} from "@mui/material";

export const aboutMeText = "I am currently studying Computer Science at Silesian University of Technology and hold an engineering degree in Automatic and Robotic Control from the same institution. Over the past three years, I have been learning programming and gaining experience in Java backend development, as well as some exposure to React.js. I am passionate about the intersection of technology and engineering and am excited to continue expanding my skills in this field. I started my programming journey with C++, but quickly fell in love with Java. Currently, I'm focusing on learning Java microservices architecture and working on a personal project. My technology stack includes Java, React.js, and various tools and frameworks used in microservices development. I'm passionate about building scalable and efficient software solutions and am eager to continue expanding my skills in this area.";

export const projects_OurKitchenYourHealth_description = "Our Kitchen - Your Health is a abstract company, which offer fresh food catering." +
    " They make your fresh, healthy meals and deliver to your house. This company need a strong, reliable system to: makes orders, manage orders, manage customers," +
    " manage meals, planning delivery.";

export const projects_SpeedReadingApp_description = <Typography><GitHubIcon /> Kitchen - Your Health is a abstract company, which offer fresh food catering. They make your fresh, healthy meals and deliver to your house. This company need a strong, reliable system to: makes orders, manage orders, manage customers, manage meals, planning delivery.</Typography>;


export const projects_PlanetfanCalculator_description =
    <Typography>
        PlanetfanCalculator is a project developed for the internal needs of the Planetfan (<Link href='https://planetfan.pl'>https://planetfan.pl/</Link>) company. This calculator has been designed to assist Planetfan's engineers, architects, and contractors in converting values related to fans, densities, noise, flow, and engine power.
        The calculator simplifies the conversion process, making it quicker and more efficient for the team to work with. By providing accurate results, Planetfan can optimize their ventilation systems and deliver the best possible solutions to their clients.
    </Typography>

export const projects_PlanetfanCalculator_description_fetures_list =
    <Typography>
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
    </Typography>

export const projects_PlanetfanCalculator_githubLink = "https://github.com/tomdud-developer/PlanetfanCalculator-public";

export const projects_DxfGenerator_description = "DxfGenerator is a specialized project designed to fulfill the specific requirements of Planetfan, a company that deals with fan manufacturing (https://planetfan.pl/). The purpose of DxfGenerator is to generate CAD DXF files for nameplates that are attached to the fans. The data required for the nameplates is stored in an Excel spreadsheet, and the program retrieves the necessary information from the spreadsheet.\n" +
    "\n" +
    "Once the data is collected, DxfGenerator creates a DXF file that can be used with Computer-Aided Manufacturing (CAM) software. This software is then utilized to generate toolpaths that are necessary for mechanical milling machines to engrave the nameplates onto the fans.\n" +
    "\n" +
    "In summary, DxfGenerator is a software tool that helps Planetfan automate the process of generating nameplates for its fans by extracting data from an Excel spreadsheet and converting it into a DXF file that can be used by CAM software and mechanical milling machines for engraving."




