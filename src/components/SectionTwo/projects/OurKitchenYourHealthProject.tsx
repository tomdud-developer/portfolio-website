import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Container} from "@mui/material";
import ProjectTab from "./ProjectTab";
import Typography from "@mui/material/Typography";
import {projects_OurKitchenYourHealth_description} from '../../texts';
export default function OurKitchenYourHealthProject() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const description = () => { return (
        <Container>
            <Typography>
                {projects_OurKitchenYourHealth_description}
            </Typography>
        </Container>
      )
    }

    const screenshots = [
,
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