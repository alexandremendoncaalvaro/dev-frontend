import { Container, Text , Card, Pokedex, Reticle, Button } from '@shared/ui';
import { CardTraining } from '@shared/business';
import { useEffect, useState } from 'react';
import { CardParameters } from './components/CardParameters';
import { CardTrainingProgress } from './components/CardTrainingProgress/CardTrainingProgress';
import { useNavigate } from 'react-router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const TrainingInterface = ({name, image_url, events, states, result, isLoadingTrain, isErrorTrain}) => {

    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        setPokemon({
            name: name,
            image_url: image_url,
        });
    }, [name, image_url]);
   

    if (!pokemon) {
        return <div>No pokemon data available</div>;
    }

    return (
        <Container $display="flex" $alignItems="center" $justifyContent="center">
            <Button
                        $position="absolute"
                        $top="1rem"
                        $left="1rem"
                        $borderRadius="2rem"
                        $p="0.5rem 1rem"
                        $width="10%"
                        $height="fit-content"
                        $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
                            4px 4px 0px rgba(0, 0, 0, 0.2);"
                        onClick={() => {
                            navigate('/')
                            }}
                    >
                        <ArrowBackIosIcon fontSize="large"/>
                        <Text 
                            $fontSize="3.5rem"
                            $m="0" 
                            $textCursor="pointer"
                        >
                           Back
                        </Text>
                        
            </Button>
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
                            pokemon={pokemon}
                            setIsTraining={events.setIsTraining}
                            result={result} 
                            isLoadingTrain={isLoadingTrain} 
                            isErrorTrain={isErrorTrain} 
                            isTraining={states.isTraining}
                            states={states}
                            events={events}
                            setPokemon={setPokemon}
                             />

    
                        </Card>  
                     
                    </Container>
                </Container>
            </Pokedex>
        </Container>
    );
};
