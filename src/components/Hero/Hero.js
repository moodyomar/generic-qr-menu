import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import shapeDivider from "./tilt.svg"

import "./Hero.css"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "220px",
    [theme.breakpoints.up("md")]: {
      height: "350px",
    },
    position: "relative",
    overflow: "hidden"
  },
  logo: {
    height: "260px",
    width: "260px",
    objectFit: "contain",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "black",
    opacity: 0.5,
    height: "220px",
    [theme.breakpoints.up("md")]: {
      height: "400px",
    },
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  shapeDivider: {
    overflow: "hidden",
    position: "relative",
    "&::before": {
      content: "''",
      fontFamily: "'shape divider from ShapeDividers.com'",
      position: "absolute",
      zIndex: 3,
      pointerEvents: "none",
      backgroundRepeat: "no-repeat",
      bottom: "-0.05vw",
      left: "-50vw",
      right: "-50vw",
      top: "-0.1vw",
      backgroundSize: "100% 30px",
      backgroundPosition: "50% 100%",
      backgroundImage: `url(${shapeDivider})`,
      filter: "invert(1)",
    },
  },}));


const Hero = ({endPoint,heroBg,textInHero,mt}) => {
  const classes = useStyles();

  return (
    <div className={classes.shapeDivider}>
      <Box className={classes.root} style={{backgroundImage: `url(${endPoint}${heroBg})`,marginTop:mt}}>
        <Box className={classes.overlay} />
        <img className={classes.logo} src={`${endPoint}${textInHero}`} alt="Logo" />
      </Box>
    </div>
  );
};

export default Hero;
