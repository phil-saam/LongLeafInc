import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "../../img/lowpoly.png";
import Logo from "../../img/LongLeafLogo.png";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: "#233d49",
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  logo: { letterSpacing: "2px" },

  head: {
    display: "flex",
  },

  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  logoImage: {
    height: "100px",
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={BackgroundImage}
        alt="Low poly design hero"
      />
      <Box className={classes.head}>
        <Typography
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
          classes={classes.logo}
          gutterBottom
        >
          Long leaf Designs
        </Typography>
      </Box>
      <img src={Logo} alt="Long Leaf Designs Logo" />
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Web Design, Search Engine Optimization, E-commerce, and Digital
        Marketing
      </Typography>

      <Button
        renderAs={Link}
        href="/contact"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        Request a Quote
      </Button>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
