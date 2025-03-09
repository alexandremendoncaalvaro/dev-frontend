import { Container, Text } from '@shared/ui';
import { Pokedex } from './components/pokedex/pokedex';
import { PokemonList } from './components/pokemonList';
import { Reticle } from './components/pokedex/pokedexReticleBg';

export const HomeInterface = ({
    pokemonList,
    events
}) => {

    return(

       <Container $display="flex" $alignItems="center" $justifyContent="center">
           
            <Pokedex>
                <Reticle/> 
                <Container $display="flex" $position='absolute'>
                    <Container>
                        <Text $textType="h1" $m="0.5rem">Pokedex</Text>
                        <PokemonList pokemonList={pokemonList}/>
                    </Container>
                   
                    <Container>
                        <button onClick={
                            () => {events.changeOffset(pokemonList.next)}}>cima</button>
                        <button
                        onClick={
                            () => {events.changeOffset(pokemonList.previous)}}
                        >baixo</button>
                    </Container>
                </Container>
               
             
            </Pokedex>
       </Container>
    )
}