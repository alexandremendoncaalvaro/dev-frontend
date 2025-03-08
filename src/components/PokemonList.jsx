import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Pagination, TextField } from "@mui/material";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const limit = 12;

  useEffect(() => {
    axios
      .get(`https://treinamento.inteligenciadascoisas.com.br/pokemon?limit=${limit}&offset=${(page - 1) * limit}`)
      .then((response) => {
        setPokemons(response.data.pokemons);
      })
      .catch((error) => console.error(error));
  }, [page]);

  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.includes(search.toLowerCase()));

  return (
    <>
      <TextField
        fullWidth
        label="Buscar Pokémon"
        variant="outlined"
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredPokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
            <Card>
              <CardMedia component="img" height="200" image={pokemon.image_url} alt={pokemon.name} />
              <CardContent>
                <Typography variant="h6" align="center">
                  {pokemon.name.toUpperCase()}
                </Typography>
                <Button fullWidth variant="contained" color="primary" component={Link} to={`/train/${pokemon.name}`}>
                  Treinar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(1304 / limit)}
        page={page}
        onChange={(event, value) => setPage(value)}
        color="primary"
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </>
  );
};

export default PokemonList;