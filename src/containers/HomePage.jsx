import React from "react";

import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/Style.css";
import Main from "../components/Main";
import {
  useGetPokemonByNameQuery,
  useGetPokemonEverythingQuery,
} from "../services/pokemonApi";
import { useParams } from "react-router-dom";

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
