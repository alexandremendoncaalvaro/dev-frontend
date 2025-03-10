import { Container, Text, Card } from '@shared/ui';
import { Pokedex } from '../home/components/pokedex/pokedex';
import { Reticle } from '../home/components/pokedex/pokedexReticleBg';
import { CustomSlider } from '@shared/business';
import { MenuItem, TextField } from '@mui/material';
export const TrainingInterface = () => {
    const currencies = [
        {
          value: 'Ofensivo',
          label: 'Ofensivo',
        },
        {
          value: 'Defensivo',
          label: 'Defensivo',
        },
        {
          value: 'Balanceado',
          label: 'Balanceado',
        }
    ]
    return (
        <Container $display="flex" $alignItems="center" $justifyContent="center">
        <Pokedex>
            <Reticle/> 
            <Container $display="flex" $position='absolute'>
                    <Container>
                        <Text $textType="h1" $m="0.5rem">Pokedex</Text>
                        
                        <Card $bgColor="var(--red)" $borderRadius="2vh" $border="solid var(--dark-blue) 0.5rem" $p="1rem">
                            <Text $textType="h1" $m="0.5rem">Epochs</Text>
                            <CustomSlider/>
                            <Text $textType="h1" $m="0.5rem">Batch Size</Text>
                            <CustomSlider/>
                            <Text $textType="h1" $m="0.5rem">Learning Rate</Text>
                            <CustomSlider/>
                            <Text $textType="h1" $m="0.5rem">Tipo do treino</Text>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                defaultValue="Balanceado"
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                        </Card>
                    </Container>
                </Container>
            </Pokedex>
        </Container>
    )
}
