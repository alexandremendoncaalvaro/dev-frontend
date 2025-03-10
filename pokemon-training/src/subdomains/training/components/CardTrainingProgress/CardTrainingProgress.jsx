import { Card, Container, Image, Text } from "@shared/ui";
import { DialogInstructions } from "./components/DialogInstructions";
import pokeball from "@assets/images/pokeball2.gif"
import pikachu from "@assets/images/images.png"
import training from "@assets/images/training.gif"
import { useState, useEffect } from "react";
import { CardProgressEpochs } from "./components/CardProgressEpochs";

export const CardTrainingProgress = ({isTraining, setIsTraining, result, isLoadingTrain, isErrorTrain, states, events}) => {
    const [image, setImage] = useState(pikachu);

    console.log(result, "no card training")
    

    useEffect(() => {
        if(isTraining){
            setImage(training);
        }else{
            setImage(pikachu);
        }
    }, [isTraining]);

    
    
    return (
        <Card 
        $w="70%"
        $m="1rem"
        $display="flex"
        $bgColor="var(--yellow)" 
        $borderRadius="2vh" 
        $border="solid var(--dark-blue) 0.5rem" 
        $p="1rem"
        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
        6px 5px 0px rgba(0, 0, 0, 0.2);">

            <Container $display="flex" $flexDirection="column" $alignItems="center" $justifyContent="space-between">
                <Container $display="flex" $h="10%" $justifyContent="space-between">
                    <Image src={pokeball} $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
                    6px 5px 0px rgba(0, 0, 0, 0.2);" $borderRadius="2vh"  $border="solid var(--dark-blue) 0.5rem"  $h="100%" />
                    <Card $bgColor="var(--red)" $borderRadius="2vh"  $border="solid var(--dark-blue) 0.5rem"  $w="90%" $h="100%">
                        <Text $textType="h3" $m="0.5rem">Waiting for Parameters...</Text>
                        </Card>
                </Container>
             
                <Image src={image} $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
                    6px 5px 0px rgba(0, 0, 0, 0.2);" $borderRadius="2vh"  $border="solid var(--dark-blue) 0.5rem"  $w="50%" $h="50%" />
                    {
                        isTraining ? <CardProgressEpochs 
                        epochs={states.epochsAnimation} 
                        xpPerBattle={states.xpPerBattleAnimation} 
                        xpPercentage={states.xpPercentageAnimation} 
                        index={states.indexEpochsAnimation} 
                        setEpochs={events.setEpochsAnimation}
                        setXpPerBattle={events.setXpPerBattleAnimation}
                        setXpPercentage={events.setXpPercentageAnimation}
                        setIndex={events.setIndexEpochsAnimation}
                        setIsTraining={events.setIsTraining}
                        result={result} isLoadingTrain={isLoadingTrain} isErrorTrain={isErrorTrain} /> : <DialogInstructions />

                    }
                
            </Container>
            

        </Card>  
    )
}
