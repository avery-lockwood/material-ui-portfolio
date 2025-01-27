import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import YouTube from "@material-ui/icons/YouTube";
import Email from "@material-ui/icons/Email";
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://github.com/avery-lockwood"> 
        <BottomNavigationAction icon={<GitHub/>} className={classes.root} />
      </a>  

      <a href="mailto:avery.lockwood9@gmail.com">
      <BottomNavigationAction icon={<Email/>} className={classes.root} />
      </a>

      <a href="https://www.youtube.com/@a.very.lockwood">
      <BottomNavigationAction icon={<YouTube/>} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
