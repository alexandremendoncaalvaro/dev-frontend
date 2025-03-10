import { Card, Text, Container, Image } from "@shared/ui";
import dumbell from '@assets/images/dumbell.png';
import sword from '@assets/images/sword.png';
import { LineChart } from '@mui/x-charts/LineChart';

export const ModalTrainingResult = ({result, setOpen}) => {
    
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
        6px 5px 0px rgba(0, 0, 0, 0.2);"
        >


          

           <Container $display="flex" $flexDirection="column" $alignItems="flex-end" $justifyContent="flex-end">

            <Text onClick={() => setOpen(false)} $textType="h1" $m="0.5rem">
                x</Text>
            <Card
            $bgColor="var(--green)" $borderRadius="2vh" 
            $w="100%"
            $border="solid var(--dark-blue) 0.5rem" $p="1rem" $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2);"
            >
                <Container $display="flex" $flexDirection="column" $alignItems="center" $justifyContent="center">

                    <Container $display="flex" $flexDirection="column"  $justifyContent="center">
                    <Card $bgColor="var(--dark-green)" $borderRadius="2vh" 
                        $w="100%"
                        $border="solid var(--dark-blue) 0.5rem" $p="1rem" $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2);">
                        <Container $display="flex" $alignItems="center" $justifyContent="flex-start">
                            <Image src={dumbell} $w="10%" $h="100%" $objectFit="contain"/>
                            <Text $textType="h3" $m="0.5rem">Training Result</Text>

                        </Container>
                    </Card>
                    <Text $textType="h3" $m="0.5rem">Total XP: {result.total_xp}</Text>
                    <Text $textType="h3" $m="0.5rem">Total Battles: {result.battles.length}</Text>
                    </Container>

               
                </Container>
             

            </Card>

            <Card 
            $bgColor="var(--green)" $borderRadius="2vh" 
            $w="100%"
            $m="1rem 0"
            $border="solid var(--dark-blue) 0.5rem" $p="1rem" $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2);">
                     <Container $display="flex" $flexDirection="column"  $justifyContent="center">
                        <Card $bgColor="var(--dark-green)" $borderRadius="2vh" 
                            $w="100%"
                            $border="solid var(--dark-blue) 0.5rem" $p="1rem" $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2);">
                            <Container $display="flex" $alignItems="center" $justifyContent="flex-start">
                                <Image src={sword} $w="10%" $h="100%" $objectFit="contain"/>
                                <Text $textType="h3" $m="0.5rem">Battles Resume (XP Gained)</Text>

                            </Container>
                        </Card>
                        <LineChart
                            xAxis={[{
                                data: result.battles.map(b => b.epoch),
                                label: "Battle",
                                sx: {
                                    fontFamily: "var(--font-family)", 
                                    fontSize: 14, 
                                    color: "black"
                                }
                            }]}
                            series={[{
                                data: result.battles.map(b => b.xp_gained),
                                area: true,
                                baseline: 'min',
                                color: '#24695e',
                                sx: {
                                    fontFamily: "var(--font-family)",
                                    fontSize: 16,
                                    color: "red"
                                }
                            }]}
                            width={500}
                            height={300}
                            sx={{
                                fontFamily: "var(--font-family)", // Fonte geral do gráfico
                                "& .MuiChartsAxis-tickLabel": { fontSize: 12, fontFamily: "var(--font-family)" }, // Fonte dos ticks
                                "& .MuiChartsAxis-label": { fontSize: 14, fontFamily: "var(--font-family)" } // Fonte dos labels
                            }}
                        />
                    </Container>
            </Card>
          
           </Container>
        </Card>
   
    )
}
