import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/opendet.jpg";
import project2 from "../images/VaporDeposition.jpg";
import Rotoforge from "../images/rotoforge-1.png";
import ERV from "../images/ERV.png";
import Workshop from "../images/shed.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#1a2036",
    height: "100%",
  },
  titleBox: {
    //backgroundColor: "white",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
    textAlign: "center",
    width: "fit-content", // Key for dynamic width
    maxWidth: "100%", // Prevent overflow on small screens
    margin: "0 auto",
    borderRadius: 20, // Adjust the radius for desired roundness
  },
  titleText: {
    color: "white", // Set title text color
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Open Detonation Spray",
    description: `While studying efficient metal deposition methods for the Infini-z print-in-place printer project, I discovered cold-spray
    technology as a potential candidate. However, the complex components needed for the system made it challenging to design for
    full printability. To address this challenge, I developed Open Detonation Spray, a printable small-scale pulsed-detonation
    spray 3D printer proof of concept. so far I have been able to reliably deposit copper on nickel and on PLA.
    `,
    image: project1,
    url: "https://github.com/avery-lockwood/OpenDetonationSpray"
  },
  {
    //add link to paper i am basing my work off of
    name: "Lithium Sulphur Battery Chemistry & soft-vacuum pvd",
    description: `After reading a research paper about carbon nanotubes to stabalize monoclinic gamma sulfir
    in lithium sulfur batteries to yeild much higher lifetime that other techniques. I wanted to try using 
    vertically aligned graphene sheets as a cheaper alternative to the graphines used in the paper.
     I built my own soft-vacuum pvd system to vapor deposit the sulfur and am currently looking for a 
     lab to assemble and test cells with.`,
    image: project2,
    url: "https://github.com/avery-lockwood/Soft-Vaccum-Pvd"
  },
  {
    name: "Rotoforge Contributions",
    description: `
    I am now working with sindry manufacturing to develop an affordable, small scale friction surfacing based metal 3d printer
    The current prototype I am working on is an orbital fricttion welding system. I designed a simple, but strong `,
    image: Rotoforge,
    url: "https://github.com/Sindry-Manufacturing/rotoforge",
  },
  {
    name: "Erv Forge build",
    description: `For the Crucible's ERV (Educaytional Respose Vehivcle), I designed and built a forge that is reliable, 
    efficient, and very repairable. This project included designing the forge and other equipment to be portable 
    and repairable in the feild. `,
    image: ERV,
    url: "https://www.thecrucible.org/erv-2022/",
  },
  {
    name: "My Workshop",
    description: `A small building that I built with my grandpa as a kid, ive been tooling up my shop
    ever since to do everything from jewlery, simple chemistry, machining and electronics.`,
    image: Workshop,
  },
  /*{
    name: "Project 6",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
  },*/
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
        <Box className={classes.titleBox}>
            <Typography variant="h3" className={classes.titleText}>
            <span>✨</span> Here's what i've been working on (^> <span>✨</span>
            </Typography>
          </Box>
      <Grid container justify="center">
         
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
            <a href={project.url} key={i} style={{textDecoration: "none", color: "#000"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </a>
            </Card> 
           
          </Grid>
        ))} 
      </Grid>
    </Box>
  );
};

export default Portfolio;
