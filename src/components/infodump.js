import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#060804",
    height: "100%",
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
]

const Infodump = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
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
    </Box>
  );
};

export default Infodump;
