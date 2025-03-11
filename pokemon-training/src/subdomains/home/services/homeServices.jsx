
import * as Axios from '@core/http.jsx';
import { useEffect, useState } from "react";

export const useListPokemon = (offset) => {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.getPokemonList(offset);
                if (response.data) {
                    setPokemonList(response.data);  
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
    }, [offset]);

    return ({pokemonList, isLoading, isError})


};