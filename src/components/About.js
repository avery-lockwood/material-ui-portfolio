import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import dancer from "../dancer.jpg"
import stu_become_teach from "../images/stu-become-teach.png"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
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
            community is cool and stuff, we cannot survive alone
          </Typography>
        </Box>
        <img src={dancer} alt="Description 1" className={classes.image} />   
      </Box>

      <Box className={classes.section}>
      <img src={dancer} alt="Description 1" className={classes.image} />   
        <Box className={classes.textContainer}>
          <Typography variant="h4" className={classes.heading}>
            Access to Tools and Technology
          </Typography>
          <Typography variant="body1" className={classes.body}>
            how and why I help people get acess to tools, knowledge and technology
          </Typography>
        </Box>
      </Box>

      <Box className={classes.section}>
        <Box className={classes.textContainer}>
          <Typography variant="h4" className={classes.heading}>
            Art and Expression
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Art is very fun and cool and healthy and healing and we should all do more of it
          </Typography>
        </Box>
        <img src={dancer} alt="Description 1" className={classes.image} />   
      </Box>
      <Box className={classes.section}>

      <img src={dancer} alt="Description 1" className={classes.image} />   
        <Box className={classes.textContainer}>
          <Typography variant="h4" className={classes.heading}>
            Environment
          </Typography>
          <Typography variant="body1" className={classes.body}> 
            Passionate about finding solutions to climate change problems
          </Typography>
        </Box>
      </Box>
      {/* Additional sections can be added below following the same pattern */}
    </Box>
  );
};

export default About;
