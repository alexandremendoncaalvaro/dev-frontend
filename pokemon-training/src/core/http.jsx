import axios from 'axios';



export const getPokemonList = async (offset) => {
    return  axios.get(`${import.meta.env.VITE_API_URL}/pokemon?limit=12&offset=${offset}`)
}

export const getPokemonImage = async (name) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/pokemon/${name}/image`)
}

export const trainPokemon = async (body) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/train/`, body)
}

