import axios from 'axios';

export const getPokemonList = async (pokeListOffset) => {
    const response = await axios.get(`https://treinamento.inteligenciadascoisas.com.br/pokemon?limit=10&offset=${pokeListOffset}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const getPokemonImage = async (pokemonName) => {
    const response = await axios.get(`https://treinamento.inteligenciadascoisas.com.br/pokemon/${pokemonName}/image`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.data;
}

export const postTrainPokemon = (pokemonName, epochs, batchSize, learningRate, optimizer) => {
    return axios.post(`https://treinamento.inteligenciadascoisas.com.br/train/`, {
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