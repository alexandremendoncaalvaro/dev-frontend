import axios from 'axios';

export const getPokemonList = async (pokeListOffset) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/pokemon?limit=10&offset=${pokeListOffset}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const getPokemonImage = async (pokemonName) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/pokemon/${pokemonName}/image`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.data;
}

export const postTrainPokemon = (pokemonName, epochs, batchSize, learningRate, optimizer) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/train/`, {
        pokemon: pokemonName,
        epochs: parseInt(epochs),
        batch_size: parseInt(batchSize),
        learning_rate: parseFloat(learningRate),
        optimizer: optimizer,
        early_stopping: false,
    },
    {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    )
}