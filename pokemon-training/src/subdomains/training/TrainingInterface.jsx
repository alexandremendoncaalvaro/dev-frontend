import { Container, Text , Card} from '@shared/ui';
import { Pokedex } from '../home/components/pokedex/pokedex';
import { Reticle } from '../home/components/pokedex/pokedexReticleBg';
import { CardTraining } from '../home/components/Training/cardTraining';
import { useEffect, useState } from 'react';
import { CardParameters } from './components/CardParameters';
import { CardTrainingProgress } from './components/CardTrainingProgress/CardTrainingProgress';

export const TrainingInterface = ({name, image_url, events, states, result, isLoadingTrain, isErrorTrain}) => {
   
    const pokemon = {
        name: name,
        image_url: image_url,
    };
            
    

    if (!pokemon) {
        return <div>No pokemon data available</div>;
    }

    return (
        <Container $display="flex" $alignItems="center" $justifyContent="center">
            <Pokedex>
                <Reticle/> 
                <Container $display="flex" $position='absolute'>
                    <Container $display="grid" $gridTemplateColumns="30% auto" $gridTemplateRows="100%">
                
                        <CardTraining isInTrainingPage={true} selectedPokemon={pokemon}/>
                        <Card 
                        $m="1rem"
                        $display="flex"
                        $bgColor="var(--red)" 
                        $borderRadius="2vh" 
                        $border="solid var(--dark-blue) 0.5rem" 
                        $p="1rem"
                        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
                        6px 5px 0px rgba(0, 0, 0, 0.2);">

                            <CardParameters events={events} states={states} />
                            <CardTrainingProgress 
                            setIsTraining={events.setIsTraining}
                            result={result} 
                            isLoadingTrain={isLoadingTrain} 
                            isErrorTrain={isErrorTrain} 
                            isTraining={states.isTraining}
                            states={states}
                            events={events}
                             />

    
                        </Card>  
                     
                    </Container>
                </Container>
            </Pokedex>
        </Container>
    );
};
