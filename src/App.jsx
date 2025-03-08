import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Typography, CssBaseline, Button } from "@mui/material";
import PokemonList from "./components/PokemonList";
import Training from "./components/Training";
import { Div } from "./components/Div";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Div padding={'2rem'}>
        <Typography variant="h3" align="center" gutterBottom>
          Pokémon Training App
        </Typography>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/train/:name" element={<Training />} />
        </Routes>
      </Div>
    </Router>
  );
};

export default App;