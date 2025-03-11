import { Card, Text, Container, Image } from "@shared/ui";
import { usePokemonImage } from "../../../services/axiosServices";
import backgroundPokemonGym from '@assets/images/gym.png';
import { useEffect } from "react";

export const ModalEvolved = ({result, setPokemon}) => {

    const {pokemon, isLoading, isError} = usePokemonImage(result.final_pokemon);

    if(!isLoading){
        setPokemon({
            name: result.final_pokemon,
            image_url: `data:image/png;base64,${pokemon.image_base64}`
        });
      
    }

    if(isError){
        return <div>Error</div>
    }

    return (
        <Card
        $position="absolute"
        $top="50%"
        $left="50%"
        $transform="translate(-50%, -50%)"
        $w="fit-content"
        $h="fit-content"
        $bgColor="var(--red)"
        $borderRadius="2vh" 
        $border="solid var(--dark-blue) 0.5rem" 
        $p="1rem"
        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
        6px 5px 0px rgba(0, 0, 0, 0.2);">
          
                
            <Container $display="flex" $flexDirection="column" $alignItems="center" $justifyContent="center">
            <Text $textType="h1">Congratulations!</Text>
                <Card $bgColor="var(--green)" $borderRadius="2vh" $w="100%" $border="solid var(--dark-blue) 0.5rem" $p="1rem" $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2);">
                    <Container $display="flex" $flexDirection="column" $alignItems="center" $justifyContent="center">
                        <Text $textType="h1">Your Pokemon Evolved to:</Text>
                        <Text $textType="h1"> {result.final_pokemon?.toUpperCase()}</Text>

                        <Container 
                         $h="40vh" 
                        $w="40vh"
                        $position="relative"
                        $display="flex"
                        $alignItems="center"
                        $justifyContent="center"
                        $m="0 0 5% 0"
                        >
                            {
                                pokemon && (<>
                                <Image
                                    $zIndex="1"
                                    $position="absolute"
                                    src={`data:image/png;base64,${pokemon.image_base64}`}
                                    $w="100%"
                                    $h={"70%"}
                                    $objectFit="contain"
                                    $top={"30%"}
                                    
                                />
                               
                                <Image
                                    $position="absolute"
                                    src={backgroundPokemonGym}
                                    $w="100%"
                                    $h="100%"
                                    $objectFit="cover"
                                    $borderRadius="2vh"
                                    $border="solid var(--dark-blue) 0.5rem"
                                />
                                
                                </>
                                    
                                )
                            }
                            
                    </Container>

                    </Container>
                </Card>
            </Container>
          
        </Card>
    )
}
