import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#305955",
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

const articles = [
  
  {
    name: "Gender experience in stem and trades",
    description: `I am a transgender tradeswoman and engineering student. I have been working in the trades and studying to become an engineer for all my adult life and here are some of my experinces. `,
    url: ""
  },
  {name:"peter's chromebook conversion",
    description:'here is peters chromebook conversion',
    url:"https://docs.google.com/document/d/1ODH2rvoCop1teArmJCL-61VVr2I2KwEqNNCYeRjWMi4/edit?usp=sharing"
  },
  {name:"peter's chromebook conversion",
    description:'here is peters chromebook conversion',
    url:"https://docs.google.com/document/d/1ODH2rvoCop1teArmJCL-61VVr2I2KwEqNNCYeRjWMi4/edit?usp=sharing"
  },
  {name:"peter's chromebook conversion",
    description:'here is peters chromebook conversion',
    url:"https://docs.google.com/document/d/1ODH2rvoCop1teArmJCL-61VVr2I2KwEqNNCYeRjWMi4/edit?usp=sharing"
  },
  {name:"peter's chromebook conversion",
    description:'here is peters chromebook conversion',
    url:"https://docs.google.com/document/d/1ODH2rvoCop1teArmJCL-61VVr2I2KwEqNNCYeRjWMi4/edit?usp=sharing"
  },
  {name:"peter's chromebook conversion",
    description:'here is peters chromebook conversion',
    url:"https://docs.google.com/document/d/1ODH2rvoCop1teArmJCL-61VVr2I2KwEqNNCYeRjWMi4/edit?usp=sharing"
  },
]

const Infodump = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
      <Box className={classes.titleBox} justify="center">
            <Typography variant="h3" className={classes.titleText} justify="center">
            <span>✨ Infodumps! (^> ✨</span>
            </Typography>
      </Box>
      <Grid container justify="center">
               
        {articles.map((article, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <a href={article.url} key={i} style={{textDecoration: "none", color: "#000"}}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {article.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
      
            </Card> 
            </a>
          </Grid>
        ))} 
        </Grid>
      </Grid>
    </Box>
  );
};

export default Infodump;
