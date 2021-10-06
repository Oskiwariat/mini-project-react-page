import React from "react";

import { Route, Switch } from "react-router-dom";

import AboutUs from "../pages/AboutUs";
import HomePage from "../pages/HomePage";
import JoinUs from "../pages/JoinUs";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/joinus" component={JoinUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
      </Switch>
    </>
  );
};

export default Page;
