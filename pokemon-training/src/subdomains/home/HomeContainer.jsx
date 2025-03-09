import { HomeInterface } from "./HomeInterface"
import { useListPokemon } from "./services/homeServices"
import { useState } from "react"


export const HomeContainer = () => {
    const [offset, setOffset] = useState(0)
    const {pokemonList, isLoading, isError} = useListPokemon(offset)
    

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (isError) {
        return <p>Houve um erro ao carregar os dados.</p>;
    }

    const events = {
        changeOffset: (url) => {
            if(url == null) {
                return
            }

            const params = new URLSearchParams(new URL(url).search);
            const offset = params.get("offset");

            setOffset(offset)

            
        }
    }

    return (
     <HomeInterface pokemonList={pokemonList} events={events}/>
    );
}