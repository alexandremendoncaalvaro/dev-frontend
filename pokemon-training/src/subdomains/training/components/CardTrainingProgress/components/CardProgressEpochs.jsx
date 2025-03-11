import { Card, Container, Text, Image, BasicModal } from "@shared/ui";
import { useState, useEffect } from "react";
import { ProgressBarCustom } from "@shared/business";
import { ModalTrainingResult } from "./ModalTrainingResult";
import { ModalEvolved } from "./ModalEvolved";
export const CardProgressEpochs = ({result, 
    isLoadingTrain, 
    isErrorTrain, epochs, 
    xpPerBattle, xpPercentage, 
    index, setEpochs, setXpPerBattle, setXpPercentage, setIndex, setIsTraining, setPokemon}) => {
  
    const [open, setOpen] = useState(false);
    const [openEvolved, setOpenEvolved] = useState(false);

    if(isErrorTrain){
      setIsTraining(false);
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
                <Text $textColor="var(--dark-blue)" $fontSize="1.5rem" $fontWeight="bold" >Something is Wrong, Please try again!</Text>
            </Card>
        )
    }

    if(isLoadingTrain){
        return(<div>Loading...</div>)
    }

    let interval = null;
  
    useEffect(() => {
        if (!result || index >= result.battles.length) return;
      
        interval = setInterval(() => {
          if (!result?.battles?.[index]?.epoch) {
            clearInterval(interval);
            return;
          }
      
          setEpochs(result.battles[index].epoch);
          setXpPerBattle(result.battles[index].xp_gained);
          setIndex((prevIndex) => prevIndex + 1);
          calculateXpPercentage(result.battles[index].xp_gained, result.total_xp);
    
          
          if (index + 1 >= result.battles.length) {
            clearInterval(interval); 
            setOpen(true);
           
          }
      
        }, 200);
      
        return () => clearInterval(interval); 
      }, [result, index]);


      const calculateXpPercentage = (xpPerBattle, xpTotal) => {

        if (xpPerBattle && xpPerBattle > 0 && xpTotal > 0) {
            let xpPercentageTemp = (xpPerBattle / xpTotal) * 100; 
        
            setXpPercentage((prev) => Math.min(prev + xpPercentageTemp, 100)); 
          }
      }

      const handleClose = () => {
        setOpen(false)
      
        if(result.pokemon != result.final_pokemon){
            setOpenEvolved(true);
            return;
        }

        setIsTraining(false);
      }

        return (
            <Card
            $h="25%"
            $m="1rem"
            $w="100%"
            $display="flex"
            $bgColor="white" 
            $borderRadius="2vh" 
            $border="solid var(--dark-blue) 0.5rem" 
        $p="1rem"
    
        $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3)">
            <Container $display="flex" $flexDirection="column" $justifyContent="space-between">
            
                <Text $textColor="var(--dark-blue)" $fontSize="1.5rem" $fontWeight="bold" >Round: {epochs}</Text>
                <Text $textColor="var(--dark-blue)" $fontSize="1.5rem" $fontWeight="bold" >XP: {xpPerBattle}</Text>
                <ProgressBarCustom value={xpPercentage} variant="determinate"/>

                <BasicModal open={open}  onClose={() => handleClose()}>
                  <ModalTrainingResult result={result} handleClose={handleClose} />
                </BasicModal>
                <BasicModal open={openEvolved}  onClose={() => {setOpenEvolved(false); setIsTraining(false)}}>
                    <ModalEvolved result={result} setPokemon={setPokemon} />
                </BasicModal>
            </Container>
           
    </Card>
    )
}
