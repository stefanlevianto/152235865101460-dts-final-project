import React from "react";
import Footer from "../components/Footer";
import ResponsiveAppBar from "../components/Navbar";
import Pokeinfo from "../components/PokeInfo";
const PokeInfoPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Pokeinfo />
      <Footer />
    </>
  );
};
export default PokeInfoPage;
