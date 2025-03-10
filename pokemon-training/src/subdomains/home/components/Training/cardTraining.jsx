import { Container, Card, Text, Image } from '@shared/ui';
import backgroundPokemon from '@assets/images/backgroundPokemon.jpg';
import { Button } from '../button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router';
import speechBubbleGif from '@assets/images/pixel-speech-bubble.gif';
import backgroundPokemonGym from '@assets/images/gym.png';

export const CardTraining = ({selectedPokemon, isInTrainingPage = false}) => {
    const navigate = useNavigate();

  
    if(selectedPokemon == null) {
        return(
            <Card
            $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
            6px 5px 0px rgba(0, 0, 0, 0.2);"
            $bgColor="var(--red)"
            $h="95%"
            $w="95%"
            $borderRadius="2vh"
            $m="1rem"
            $border="solid var(--dark-blue) 0.5rem"
            >
                <Text $fontSize="1.2rem">Carregando...</Text>
            </Card>
        )
    }
    return (
        <Card
        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
        6px 5px 0px rgba(0, 0, 0, 0.2);"
        $bgColor="var(--red)"
        $h="95%"
        $w="95%"
        $borderRadius="2vh"
        $m="1rem"
        $border="solid var(--dark-blue) 0.5rem"
        >
        <Container 
            $display="flex" 
            $flexDirection="column" 
            $position="relative" 
            $alignItems="center" 
            $justifyContent="center"
            $h="100%"
        >
            <Image 
                src={speechBubbleGif} 
                $w="65%" 
                $h="fit-content" 
                $position="absolute" 
                $top="15%" 
                $left="35%"
                $objectFit="contain"
                $zIndex="2"
            />
            <Container 
                $h="40vh" 
                $w="40vh"
                $position="relative"
                $display="flex"
                $alignItems="center"
                $justifyContent="center"
                $m="0 0 5% 0"
            >
                <Image
                    $zIndex="1"
                    $position="absolute"
                    src={selectedPokemon.image_url}
                    $w="100%"
                    $h={isInTrainingPage ? "70%" : "100%"}
                    $objectFit="contain"
                    $top={isInTrainingPage ? "30%" : "0"}
                    
                />
                <Image
                    $position="absolute"
                    src={isInTrainingPage ? backgroundPokemonGym : backgroundPokemon}
                    $w="100%"
                    $h="100%"
                    $objectFit="cover"
                    $borderRadius="2vh"
                    $border="solid var(--dark-blue) 0.5rem"
                />
            </Container>
            <Card
                $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
                4px 4px 0px rgba(0, 0, 0, 0.2);"
                $bgColor="var(--dark-green)"
                $borderRadius="0.5vh"
                $border="solid var(--dark-blue) 0.2rem"
                $p="0.5rem"
                $w="60%"
                $textAlign="center"
                $m="0 auto"
            >
                <Text $fontSize="2rem">
                    {selectedPokemon.name != null ? selectedPokemon.name.toUpperCase() : ""}
                </Text>
            </Card>
        </Container>
        {isInTrainingPage ? <></> :
        <Button
        $position="absolute"
        $borderRadius="2rem"
        $p="0.5rem 1rem"
        $width="20%"
        $top="88%"
        $left="79%"
        $height="fit-content"
        $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
        4px 4px 0px rgba(0, 0, 0, 0.2);"
        onClick={() => navigate(`/training/${selectedPokemon.name}`, { state: { name: selectedPokemon.name, image_url: selectedPokemon.image_url } })}
        
        >
            <Text $fontSize="3.5rem"
            $m="0 2rem 0 0" $textCursor="pointer">Let's Train!</Text>
            <PlayArrowIcon fontSize="large"/>
        </Button>
        }
    </Card>
)
}
