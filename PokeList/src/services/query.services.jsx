import * as Axios from '../core/http/http.js';

export const fetchPokemonList  = () => {
    return Axios.getPokemonList().then((response) => response.data)
};

export const useGetPokemonImage = (pokemonName) => {
    Axios.getPokemonImage(pokemonName).then((response) => response.data)
};

export const useTrainPokemon = (pokemonName, epochs, batchSize, learningRate, optimizer) => {
    Axios.trainPokemon(pokemonName, epochs, batchSize, learningRate, optimizer).then((response) => response.data)
};