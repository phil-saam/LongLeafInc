import React from "react";
import Typography from "./modules/components/Typography";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Video from "./modules/components/Video";

import buyIcon from "./img/buyIcon.png";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  eStoreImage: {
    maxWidth: "100%",
    height: "auto",
  },
  grid: {
    marginTop: theme.spacing(4),
  },
});

const Contact = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.container}>
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h4"
        gutterBottom
      >
        Our E-Commerce Services
      </Typography>

      <Grid container spacing={5} className={classes.grid}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            E-commerce is continuously expanding year after year. Online sales
            have become a necessity for businesses large and small. Your
            customers want to buy your products from home, it is easier, more
            convenient, and right now it is safer. Corona Virus will go away but
            the trend towards e-commerce will continue. E-commerce is
            competitive, you need a vibrant fast mobile friendly e-store to set
            yourself apart.
          </Typography>
          <img src={buyIcon} alt="Buy Icon"></img>
          <Typography variant="h5" gutterBottom>
            At Long Leaf Designs we create beautiful unique stores that will
            highlight your products and convert clicks to sales. We can build
            truly custom websites that are unique to your brand, not some off
            the shelf template. We use the most modern and popular tools like
            Shopify and WooCommerce allow store owners to update and manage
            items for sale quickly and easily. We carefully craft websites that
            focus on guiding customers towards purchases. We offer complete
            packages from advertising to unique functional e-stores we can
            create what your company needs to compete.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Video />
        </Grid>
      </Grid>
      <Grid container>
        <Box my={3}>
          <Grid item xs={12}></Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Contact);
