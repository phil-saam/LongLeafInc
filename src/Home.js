import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";

import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/WhatWeDo";
import ContactCTA from "./modules/views/ContactCTA";
import CarouselPortfolio from "./modules/views/RecentWork";
import CoronaVirus from "./modules/views/CoronaVirus";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Long Leaf Designs Web development and marketing firm.  We create custom fast mobile first websites.  Specialize in E-commerce and SEO"
        />
        <link rel="canonical" href="https://www.longleafdesigns.com" />
        <title>Long Leaf Designs Inc</title>
      </Helmet>
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
