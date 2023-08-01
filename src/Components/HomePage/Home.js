import React, { Fragment } from "react";
import Header from "./Layouts/Header";
import Tours from "./Layouts/Tours";
import EStoreFooter from "../UI/Footer";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Tours />
      <EStoreFooter />
    </Fragment>
  );
};
export default Home;
