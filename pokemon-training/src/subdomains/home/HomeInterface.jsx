/* eslint-disable react/prop-types */
import { Container, Text, Card, Image, Pokedex, Reticle} from '@shared/ui';
import { PokemonList } from './components/pokemonList';
import { Pagination } from './components/Pagination/Pagination';
import { CardTraining } from '@shared/business';
import pokeLearningLogo from '@assets/images/logoLearning.png';

export const HomeInterface = ({
    pokemonList,
    events,
    states
}) => {

    return(
       <Container $display="flex" $alignItems="center" $justifyContent="center">
          <Card $position="absolute" $top="0.5rem" $left="1rem" $bgColor="var(--dark-green)" $borderRadius="2vh" 
           $border="solid var(--dark-blue) 0.5rem"  $w="20%" $h="fit-content"
           $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3),4px 4px 0px rgba(0, 0, 0, 0.2)" $zIndex="1">
                            <Container $display="flex" $alignItems="flex-start" $justifyContent="space-evenly">
                            <Image src={pokeLearningLogo} $w="fit-content" $h="7vh"/>
                            <Text $textType="h1" $m="0.8rem">Poke Learning</Text>
                            </Container>
                            
                        </Card>
            <Pokedex>
                <Reticle/> 
                <Container $display="flex" $position='absolute'>
                    <Container>
                      
        
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