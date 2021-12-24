import { Grid } from "@material-ui/core";
import { AboutHeading, CometImage,AboutContent } from "./About.styles";
import aboutData from "./AboutData";

const About = ()=>{
    return(
        <div id="about">
            <AboutHeading>ABOUT NASA API</AboutHeading>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <CometImage />
                </Grid> 
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    {
                        aboutData.map((data)=><AboutContent>• {data}</AboutContent>)
                    }
                </Grid> 
            </Grid>
        </div>
    )
};

export default About;