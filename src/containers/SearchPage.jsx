import React, { useState } from "react";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGetPokemonByNameQuery } from "../services/pokemonApi";
import { Typography, InputBase, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PokeInfo from "../components/PokeInfo";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Searchpage() {
  const { query } = useParams();
  const [params, setParams] = useState(query);
  const { data } = useGetPokemonByNameQuery({ query: params });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const query = data.get("search");
    if (query !== "") setParams(query);
  };

  return (
    <>
      <ResponsiveAppBar />
      <section style={{ margin: "6rem 3rem 0" }}>
        <div style={{ width: "20rem" }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{
                  "aria-label": "search",
                  style: { fontSize: 15.5 },
                }}
                name="search"
              />
            </Search>
          </Box>
        </div>
        <Typography my="2rem" variant="h6" color="white">
          Search results from "{params}" query{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            rowGap: 3,
          }}
        >
          <PokeInfo data={data} />
        </Box>
      </section>
      <Footer></Footer>
    </>
  );
}
