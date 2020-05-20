import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import DevicesIcon from "@material-ui/icons/Devices";
import CodeIcon from "@material-ui/icons/Code";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "../components/Typography";
import Hidden from "@material-ui/core/Hidden";

import Particles from "react-particles-js";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
    position: "relative",
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  particles: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Box className={classes.particles}>
        <Hidden smDown>
          <Particles
            canvasClassName={classes.particles}
            params={{
              particles: {
                line_linked: {
                  color: "#FFFFFF",
                },
                number: {
                  value: 45,
                },
                size: {
                  value: 4,
                },
              },
              interactivity: {
                events: {
                  detect_on: "canvas",
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
              },
            }}
          />
        </Hidden>
      </Box>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <CodeIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Web Designs
              </Typography>
              <Typography variant="h5">
                {"We build mobile first, conversion focused websites. "}
                {
                  "The website we create are friendly, clean designs which engage your viewers. We can build your E-commerce, Wordpress, or advanced custom apps."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <DevicesIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Digital Marketing
              </Typography>
              <Typography variant="h5">
                {
                  "We provide complete digital services, from logos to ad campaigns. "
                }
                {
                  "Work with us to build your brand and modernize your digital marketing plan."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <SearchIcon fontSize="large" />
              <Typography variant="h6" className={classes.title}>
                Search Engine Optimization
              </Typography>
              <Typography variant="h5">
                {
                  "What makes good SEO is constantly changing. Using the right strategy means more business for you.  Get your business seen with us."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
