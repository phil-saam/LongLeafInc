import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";

import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/WhatWeDo";
import ContactCTA from "./modules/views/ContactCTA";
import CarouselPortfolio from "./modules/views/RecentWork";



function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <CarouselPortfolio />
      <ProductHowItWorks />
      <ContactCTA />
    </React.Fragment>
  );
}

export default withRoot(Index);
