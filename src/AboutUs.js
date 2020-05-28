import React from "react";
import { Helmet } from "react-helmet";
import Typography from "./modules/components/Typography";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
//Logos
import ShopifyLogo from "./img/Brands/shopify_logo_black.png";
import WordpressLogo from "./img/Brands/WordPress-logotype-alternative.png";
import DrupalLogo from "./img/Brands/Wordmark_blue_PANTONE.png";
import GoogleBrands from "./img/Brands/googlelogo.png";
import Webflowlogo from "./img/Brands/webflowlogo.png";

import buyIcon from "./img/buyIcon.png";
import PhoneEmail from "./modules/components/PhoneEmail";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  grid: {
    marginTop: theme.spacing(4),
  },

  logoImages: {
    margin: "10px 10px",
  },

  partners: { fontSize: 19 },
});

const Contact = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="Long Leaf Designs About Us" />
        <meta
          name="description"
          content="Long Leaf Designs about us. Who we are, and what we do"
        />
        <link rel="canonical" href="https://www.longleafdesigns.com/about" />
        <title>Long Leaf Designs About Us</title>
      </Helmet>
      <Box mt={6}>
        <Container className={classes.container}>
          <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h4"
            gutterBottom
          >
            About Us
          </Typography>

          <Grid container spacing={5} className={classes.grid}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h5" gutterBottom>
                We are a web design and digital marketing company based in
                Raleigh, NC. We focus on digital solutions for small businesses.
                Long Leaf Designs was founded in 2019 and provides website
                creation, e-commerce, and digital marketing for clients across
                the United States.
              </Typography>
              <Box style={{ textAlign: "center" }}></Box>
            </Grid>
          </Grid>
          <Grid container>
            <Box my={3}>
              <Typography
                variant="h4"
                className={classes.partners}
                align="center"
                gutterBottom
              >
                Companies we partner with
              </Typography>
              <Grid item xs={12} alignItems="center">
                <Box px={1}>
                  <img
                    src={ShopifyLogo}
                    alt="Shopify Logo"
                    height="60px"
                    className={classes.logoImages}
                  />
                  <img
                    src={WordpressLogo}
                    alt="Wordpress Logo"
                    height="80px"
                    className={classes.logoImages}
                  />
                  <img
                    src={DrupalLogo}
                    alt="Drupal Logo"
                    height="60px"
                    className={classes.logoImages}
                  />
                  <img
                    src={Webflowlogo}
                    alt="Webflow Logo"
                    height="60px"
                    className={classes.logoImages}
                  />
                  <img
                    src={GoogleBrands}
                    alt="Google Logo"
                    height="60px"
                    className={classes.logoImages}
                  />
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid container>
            <PhoneEmail />
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default withStyles(styles)(Contact);
