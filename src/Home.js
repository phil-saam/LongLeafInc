import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";

import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/WhatWeDo";
import ContactCTA from "./modules/views/ContactCTA";
import CarouselPortfolio from "./modules/views/RecentWork";
import CoronaVirus from "./modules/views/CoronaVirus";

function Index() {
  const [state, setState] = React.useState({
    open: true,
  });

  const { open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <CarouselPortfolio />
      <ProductHowItWorks />
      <ContactCTA />
      <CoronaVirus open={open} handleClose={handleClose} />
    </React.Fragment>
  );
}

export default withRoot(Index);
