import { Container, Text } from '@shared/ui';
import { Pokedex } from './components/pokedex/pokedex';
import { PokemonList } from './components/pokemonList';
import { Reticle } from './components/pokedex/pokedexReticleBg';
import { Pagination } from './components/button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
                   
                    <Container
                        $display="flex"
                        $flexDirection= "column"
                        $justifyContent="space-evenly">
                    
                        <Pagination
                        $rotate="-90deg"
                            onClick={
                                () => {events.changeOffset(pokemonList.previous)}}
                            >
                            <PlayArrowIcon/>
                        </Pagination>
                        <Pagination 
                            $rotate="90deg"
                            onClick={
                                () => {events.changeOffset(pokemonList.next)}}>
                                    <PlayArrowIcon/>
                        </Pagination>
                      
                    </Container>
                </Container>
               
             
            </Pokedex>
       </Container>
    )
}