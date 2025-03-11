import { HomeInterface } from "./HomeInterface"
import { useListPokemon } from "./services/homeServices"
import { useEffect, useState } from "react"


export const HomeContainer = () => {
    const [offset, setOffset] = useState("0")
    const {pokemonList, isLoading, isError} = useListPokemon(offset)
    const [pokemonSelected, setPokemonSelected] = useState(null)
    


    useEffect(() => {
        if(isLoading == false) {
            setPokemonSelected(pokemonList.pokemons[0])
        }
    }, [isLoading])


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
            const newOffset = params.get("offset");
            
   

            setOffset(newOffset);
        },
        setPokemonSelected: (pokemon) => {
            setPokemonSelected(pokemon)
        }
    }

    const states = {
        pokemonSelected: pokemonSelected
    }

   

    return (
     <HomeInterface pokemonList={pokemonList} events={events} states={states}/>
    );
}