import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// Dynamically import all images from images/blacksmithing
function importAll(r) {
  return r.keys().map((key) => {
    const module = r(key);
    const src = module.default || module;
    // key looks like './filename.jpg' -> strip './' and extension
    const base = key.replace(/\.\//, "").replace(/\.[^/.]+$/, "");
    // convert filename to a title: replace -/_ with space and capitalize words
    const title = base
      .replace(/[-_]+/g, " ")
      .split(" ")
      .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");
    return { src, title };
  });
}

const images = importAll(
  require.context("../images/blacksmithing", false, /\.(png|jpe?g|svg)$/)
);

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000",
    minHeight: "100vh",
    paddingBottom: theme.spacing(6),
  },
  titleBox: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    textAlign: "center",
    width: "fit-content",
    margin: "0 auto",
    borderRadius: 12,
  },
  titleText: {
    color: "white",
  },
  cardContainer: {
    maxWidth: 700,
    margin: "1.5rem auto",
  },
  media: {
    height: 360,
    objectFit: "cover",
  },
  cardTitle: {
    textAlign: "center",
  },
}));

const Blacksmithing = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.titleText}>
          <span>✨</span>Miscleanous Small Projects<span>✨</span>
        </Typography>
      </Box>

      <Grid container justifyContent="center">
        {images.map((img, i) => (
          <Grid item xs={12} sm={10} md={6} key={i}>
            <Card className={classes.cardContainer}>
              <a href={img.src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={img.src}
                    title={img.title}
                  />
                  <CardContent>
                    <Typography variant="h5" className={classes.cardTitle}>
                      {img.title}
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

export default Blacksmithing;
