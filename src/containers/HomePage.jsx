import React from "react";

import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/Style.css";
import Main from "../components/Main";

const HomePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
