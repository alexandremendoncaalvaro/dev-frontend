import { PokemonItem } from './pokemonItem';
import { Container, Card } from '@shared/ui';

export const PokemonList = ({pokemonList, events, states}) => {


    return(
        <Card
        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
        6px 5px 0px rgba(0, 0, 0, 0.2);"
        $bgColor="var(--red)"
        $h="89%"
        $borderRadius="2vh"
        $m="1rem"
        $border="solid var(--dark-blue) 0.5rem"
        >
            {
            pokemonList?.pokemons.length > 0 ? (
                <Container 
                    $display="grid" 
                    $gridTemplateColumns="25% 25% 25% 25%"
                    $gridTemplateRows="33% 33% 33%">
                    {pokemonList.pokemons.map((data, index) => (
                          <PokemonItem key={index} data={data} events={events} states={states}></PokemonItem>
                    ))}
                </Container>
            ) : (
                    <p>Sem Pokémons para mostrar.</p>
            )
            }
        </Card>
    )

    
}