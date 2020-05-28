import React from "react";
import { Grid, Link, Box } from "@material-ui/core";

import Typography from "./Typography";

const PhoneEmail = () => {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12}>
        <Box p={1}>
          <Typography variant="h6">Email Us:</Typography>
          <Link
            href="mailto:phil@longleafdesigns.com"
            target="_top"
            aria-label="Contact Email"
          >
            <Typography variant="h6" color="secondary">
              Phil@longleafdesigns.com
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box p={1}>
          <Typography variant="h6">Call Us:</Typography>
          <span itemprop="telephone">
            <Link href="tel:+9195260822‬" aria-label="Phone Number">
              <Typography variant="h6" color="secondary">
                (919) 526-0822
              </Typography>
              ‬
            </Link>
          </span>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default PhoneEmail;
