import { Text, Container } from '@shared/ui';
import { CustomSlider } from '@shared/business';
import { Input } from '@mui/material';
import { useState } from 'react';
import { inputStyle } from '@core/enums/enumsThemeMaterial';

export const ParameterSlider = ({ 
    label,
    min,
    max,
    step,
    value,
    onChange,
    showInput = true
}) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value === '') return;
        const newValue = Number(event.target.value);
        onChange(newValue);
    };

    const handleBlur = () => {
        if (inputValue === '') {
            setInputValue(min);
            onChange(min);
            return;
        }
        const numValue = Number(inputValue);
        if (numValue < min) {
            setInputValue(min);
            onChange(min);
        } else if (numValue > max) {
            setInputValue(max);
            onChange(max);
        }
    };

    return (
        <Container $display="flex" $flexDirection="column" $w="100%" $h="100%">
            <Text $textType="h3" >{label}</Text>
            <Container $gap="1rem" $display="flex" $h="100%" $alignItems="center" $justifyContent="flex-start">
            <CustomSlider 
        
                min={min}
                max={max}
                value={value || min}
                step={step}
                onChange={(e, value) => {
                    setInputValue(value);
                    onChange(value);
                }}
            />
            {showInput && (
                <Input
                    
                    value={inputValue}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                        step,
                        min,
                        max,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    sx={inputStyle}
                />
            )}

            </Container>
            
        </Container>
    );
}; 