import * as Axios from '@core/http.jsx';
import { useEffect, useState } from "react";

export const usePokemonImage = (pokemonName) => {

    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.getPokemonImage(pokemonName);
                if (response.data) {
                    setPokemon(response.data);  
                } else {
                    console.log("Resposta da API é null ou não está no formato esperado");
                }
            } catch (error) {
                console.error("Erro na API:", error);
                setIsError(true);  
            } finally {
                setIsLoading(false);  
            }
        };

        fetchData();
    }, []);

    return ({pokemon, isLoading, isError})


};

export const useTrainPokemon = (body, startTraining) => {


    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        if(!startTraining) return;

        const fetchData = async () => {
            try {
                const response = await Axios.trainPokemon(body);
                if (response.data) {
                    setResult(response.data);  
                } else {
                    console.log("Resposta da API é null ou não está no formato esperado");
                }
            } catch (error) {
                console.error("Erro na API:", error);
                setIsError(true);  
            } finally {
                setIsLoading(false);  
            }
        };

        fetchData();
    }, [startTraining]);

    return ({result, isLoading, isError})


};