import { Container, Card, Text, Image } from '@shared/ui';
import backgroundPokemon from '@assets/images/backgroundPokemon.jpg';
import { Button } from '../button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router';
export const CardTraining = ({selectedPokemon}) => {
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
        <Container $display="flex" $flexDirection="column" $position="relative" $alignItems="center" $justifyContent="center">
            <Card
                $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
                4px 4px 0px rgba(0, 0, 0, 0.2);"
                $bgColor="var(--dark-green)"
                $borderRadius="0.5vh"
                $border="solid var(--dark-blue) 0.2rem"
                $p="0.5rem"
                $w="60%"
                $left="20%"
                $h="fit-content"
                $position="absolute"
                $top="60%"
                $textAlign="center">
                  
                    <Text $fontSize="2rem">{selectedPokemon.name != null ? selectedPokemon.name.toUpperCase() : ""}</Text>
                </Card>
                <Container 
                $h='fit-content' 
                $w="fit-content" 
                $position="absolute"
                $top="6%"
                $left="15%"
            
                >
                    <Image
                        $zIndex="1"
                        $position="absolute"
                        src={selectedPokemon.image_url}
                        $w="fit-content"
                        $h="40vh"/>
                    <Image
                        $position="absolute"
                        src={backgroundPokemon}
                        $w="fit-content"
                        $borderRadius="2vh"
                        $border="solid var(--dark-blue) 0.5rem"
                        $h="40vh"/>
                </Container>
       
            </Container>
            <Button
            $position="absolute"
            $borderRadius="2rem"
            $p="0.5rem 1rem"
            $width="fit-content"
            $top="88%"
            $left="85%"
            $height="fit-content"
            $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
            4px 4px 0px rgba(0, 0, 0, 0.2);"
            onClick={() => navigate('/training')}
            >
                <Text $fontSize="3.5rem"
                $m="0 2rem 0 0">Train</Text>
                <PlayArrowIcon fontSize="large"/>
            </Button>
           
        </Card>
    )
}
