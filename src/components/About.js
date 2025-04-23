import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import stu_become_teach from "../images/stu-become-teach.png"
import averyandcera from "../images/ave&cera.JPG"
import milling from "../images/milling.jpg"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000",
    padding: "2rem",
    alignItems: "center",
  },
  section: {
    display: "flex",
    alignItems: "center",
    padding: "2rem 4rem",
    /*
    "&:nth-of-type(odd)": {
      flexDirection: "row",
    },
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },*/
  },
  image: {
    width: "40%",
    height: "auto",
    borderRadius: "8px",
    margin: "0 2rem",
  },
  textContainer: {
    width: "60%",
  },
  heading: {
    color: "tomato",
    paddingBottom: "1rem",
  },
  body: {
    color: "tan",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      {/* Section 1: Image on Left, Text on Right */}
      <Box className={classes.section}>
        <img src={stu_become_teach} alt="Description 1" className={classes.image} />
        <Box className={classes.textContainer}>
          <Typography variant="h4" className={classes.heading}>
            Education
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Education comes from everywhere, some of the ways I've found the amazing teachers I have is
            through showing up at makerspaces like the sudo room, and learning from other instructors at
            the crucible. A few particularly influential teachers of mine are <a href="https://akjsdakjshd">Cleste Flores</a> who 
            taught me almost everything I know about blacksmithing. <a href='kadkjs'>Ian Wrenk</a> who taught be manual and cnc machining.
            and many more people who share their passions at every opportunity.
          </Typography>
        </Box>
      </Box>

      {/* Section 2: Image on Right, Text on Left */}
      <Box className={classes.section}>
        <Box className={classes.textContainer}>
          <Typography variant="h4" className={classes.heading}>
            Community
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Makerspaces are some of the most important places to learn, grow and build. I am involved in a many as posseble
            to expand my skills, network, and teach.
             <a href="https://sudoroom.org/">The Sudo Room</a> 
            , <a href="https://www.noisebridge.net/wiki/Noisebridge">Noisebridge</a>, <a href="https://www.thecrucible.org/">The Crucible</a>, 
            and <a href="https://www.clayandsteel.com/">Clay and Steel</a> are my current 
            makerspaces of choice since I can see that they are doing their best to make tools and skills acessable to as many 
            people as they can. these spaces all also do their best to create a welcoming Environment for people of all
            backgrounds, identities, and classes. 
          </Typography>
        </Box>
        <img src={averyandcera} alt="Description 1" className={classes.image} />   
      </Box>

      <Box className={classes.section}>
      <img src={milling} alt="Description 1" className={classes.image} />   
        <Box className={classes.textContainer}>
          <Typography variant="h4" className={classes.heading}>
            Access to Tools and Technology
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Access to tools, technology, and ways to grow is becoming increaginly important in our world where jobs are rapidly
             automated. A lot of people will need to change careers fast in order to keep up with the rapidly changing world.
             Keeping places like community colleges, makerspaces, tool libraries, and job training centers acessable is critical 
             for keeping up.

             I am currrently working to improve infrastructure at the sudo room, and develop curriculum
             for design for manufacturing workshops that are accessable to low income individuals. 

          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
