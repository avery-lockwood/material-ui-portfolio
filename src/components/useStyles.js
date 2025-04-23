import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;