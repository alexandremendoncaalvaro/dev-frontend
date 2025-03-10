import { Card, Text, Container,Image } from "@shared/ui";
import treinador from "@assets/images/treinador.gif"
export const DialogInstructions = () => {
return (
<Card

    $h="25%"
    $m="1rem"
    $display="flex"
    $bgColor="white" 
    $borderRadius="2vh" 
    $border="solid var(--dark-blue) 0.5rem" 
    $p="1rem"

    $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3)">
        <Container $display="flex" $justifyContent="space-between">
            <Text $textColor="var(--dark-blue)" $fontSize="1.5rem" $fontWeight="bold" >Select Parameters to Start Training</Text>
            <Image src={treinador}/>

        </Container>
       
</Card>
)
}
