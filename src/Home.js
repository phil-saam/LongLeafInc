import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";

import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/WhatWeDo";

import CarouselPortfolio from "./modules/views/RecentWork";
import Contact from "./Contact";

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <CarouselPortfolio />
      <ProductHowItWorks />
      {/* <ProductCTA /> */}
      <Contact />
    </React.Fragment>
  );
}

export default withRoot(Index);
