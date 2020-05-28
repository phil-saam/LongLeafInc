import React from "react";
import { Helmet } from "react-helmet";
import Typography from "./modules/components/Typography";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import raleigh from "./img/raleighSkyline.jpg";
import ContactForm from "./modules/components/ContactForm";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  raleigh: {
    backgroundImage: `url(${raleigh})`,
    backgroundColor: "#233d49",
    backgroundPosition: "cover",
    width: "100%",
    height: "auto",
    minHeight: 550,
  },
  grid: {
    marginTop: theme.spacing(4),
  },
});

const Contact = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Long Leaf Designs Contact.  Contact us to get started building your website, digital marketing plan, or e-commerce store"
        />
        <link rel="canonical" href="https://www.longleafdesigns.com/contact" />
        <title>Long Leaf Designs Contact Us</title>
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
            Contact Us
          </Typography>

          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} sm={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.raleigh}></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default withStyles(styles)(Contact);
