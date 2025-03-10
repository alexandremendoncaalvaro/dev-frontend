import axios from 'axios';


const URL = "https://treinamento.inteligenciadascoisas.com.br/"

export const getPokemonList = async (offset) => {
    return  axios.get(`${URL}pokemon?limit=12&offset=${offset}`)
}

export const getPokemonImage = async (name) => {
    return axios.get(`${URL}pokemon/${name}/image`)
}

export const trainPokemon = async (body) => {
    return axios.post(`${URL}train/`, body)
}

