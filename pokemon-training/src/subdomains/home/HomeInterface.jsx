/* eslint-disable react/prop-types */
import { Container, Text } from '@shared/ui';
import { Pokedex } from './components/pokedex/pokedex';
import { PokemonList } from './components/pokemonList';
import { Reticle } from './components/pokedex/pokedexReticleBg';
import { Pagination } from './components/Pagination/Pagination';
import { CardTraining } from './components/Training/cardTraining';

export const HomeInterface = ({
    pokemonList,
    events,
    states
}) => {

    return(
       <Container $display="flex" $alignItems="center" $justifyContent="center">
            <Pokedex>
                <Reticle/> 
                <Container $display="flex" $position='absolute'>
                    <Container>
                        <Text $textType="h1" $m="0.5rem">Pokedex</Text>
                        <PokemonList pokemonList={pokemonList} events={events} states={states}/>
                    </Container>
                    
                    <Pagination 
                        onPrevious={() => events.changeOffset(pokemonList.previous)}
                        onNext={() => events.changeOffset(pokemonList.next)}
                    />

                    <Container $h="95%" $w="50%" $p="1rem 1rem 0 0 ">
                        <CardTraining selectedPokemon={states.pokemonSelected}/>
                    </Container>
                </Container>
            </Pokedex>
       </Container>
    )
}