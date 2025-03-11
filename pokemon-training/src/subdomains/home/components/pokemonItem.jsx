import { Card, Container, Image, Text} from '@shared/ui';
import { Reticle } from '../../../shared/ui/pokedex/pokedexReticleBg';
export const PokemonItem = ({data, events, states}) => {

    const isSelected = states.pokemonSelected?.name === data.name

    return(
    
    <Card
        onClick={() => events.setPokemonSelected(data)}
        $display="flex"
        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
        6px 5px 0px rgba(0, 0, 0, 0.2);"
        $bgColor="var(--green)"
        $borderRadius="2vh"
        $m="1rem"
        $outline={isSelected ? "solid var(--yellow) 0.5rem" : "none"}
        $border="solid var(--dark-blue) 0.5rem"
        $position="relative">
             <Reticle $position="absolute"/> 
            <Container 
            $display="flex" 
            $flexDirection="column"
            $alignItems="center"
            $justifyContent="center"
            $position="relative">
                <Image 
                src={data.image_url}
                $w="fit-content"
                $h="13vh"/>
                <Card
                $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
                4px 4px 0px rgba(0, 0, 0, 0.2);"
                $bgColor="var(--dark-green)"
                $borderRadius="0.5vh"
                $border="solid var(--dark-blue) 0.2rem"
                $p="0.5rem"
                $w="70%"
                $textAlign="center">
                    <Text $fontSize="1.2rem">{data.name != null ? data.name.toUpperCase() : ""}</Text>
                </Card>
               
            </Container>
       
     </Card>
    )
}