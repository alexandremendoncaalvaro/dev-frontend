import { Card, Text, Image, Container } from '@shared/ui';
import { MenuItem, TextField } from '@mui/material';
import { Button } from '../../home/components/button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { typeTraining } from '@core/enums/enumsTraining.js';
import { ParameterSlider } from './ParameterSlider';
import dumbell from '@assets/images/dumbell.png';
import { inputStyle } from '@core/enums/enumsThemeMaterial';
export const CardParameters = ({events, states}) => {
    return (
        <Card 
            $display="flex"
            $bgColor="var(--green)" 
            $borderRadius="2vh" 
            $border="solid var(--dark-blue) 0.5rem" 
            $p="1rem"
            $w="45%"
            $boxShadow="inset 5px 7px 0px rgba(0, 0, 0, 0.3), 
            6px 5px 0px rgba(0, 0, 0, 0.2);"
        >
            <Container $display="flex" $flexDirection="column" $gap="1rem" $h="100%" $w="100%">
                <Card $bgColor="var(--dark-green)" $borderRadius="2vh" 
                    $border="solid var(--dark-blue) 0.5rem" $p="1rem" $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.2);">
                    <Container $display="flex" $alignItems="center" $justifyContent="flex-start">
                        <Image src={dumbell} $w="10%" $h="100%" $objectFit="contain"/>
                        <Text $textType="h3" $m="0.5rem">Parameters</Text>
                    </Container>
                </Card>

                <Container $display="flex" $flexDirection="column" $gap="1rem" $flex="1">
                    <ParameterSlider 
                        label="Epochs"
                        min={1}
                        max={50}
                        step={1}
                        value={states.epochs}
                        onChange={events.setEpochs}
                    />
                    
                    <ParameterSlider 
                        label="Batch Size"
                        min={1}
                        max={10}
                        step={1}
                        value={states.batchSize}
                        onChange={events.setBatchSize}
                    />
                    
                    <ParameterSlider 
                        label="Learning Rate"
                        min={0.01}
                        max={1}
                        step={0.01}
                        value={states.learningRate}
                        onChange={events.setLearningRate}
                    />

                    <Text $textType="h3" $m="0.5rem">Tipo do treino</Text>
                    <TextField
                        sx={inputStyle}
                        id="outlined-select-currency"
                        select
                        fullWidth
                        value={states.typeTraining || 'Balanceado'}
                        onChange={(e) => events.setTypeTraining(e.target.value)}
                    >
                        {typeTraining.map((option) => (
                            <MenuItem sx={{
                                fontFamily: "var(--font-family)",
                            }} key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        $borderRadius="2rem"
                        $p="0.5rem 1rem"
                        $width="100%"
                        $height="fit-content"
                        $boxShadow="inset 3px 2px 0px rgba(0, 0, 0, 0.3), 
                            4px 4px 0px rgba(0, 0, 0, 0.2);"
                        onClick={() => {
                            events.setIndexEpochsAnimation(0)
                            events.setEpochsAnimation(null)
                            events.setXpPerBattleAnimation(null)
                            events.setXpPercentageAnimation(null)
                            events.startTraining()}}
                    >
                        <Text 
                            $fontSize="3.5rem"
                            $m="0 2rem 0 0" 
                            $textCursor="pointer"
                        >
                            Let's Go!
                        </Text>
                        <PlayArrowIcon fontSize="large"/>
                    </Button>
                </Container>
            </Container>
        </Card>
    );
}; 