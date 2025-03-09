import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const MaterialCheckbox = styled(Checkbox)(
    ({ scale, iconsize, iconsize1600x2560, iconcolor }) => ({
        transform: `scale(${scale || 1.2})`, // Default scale to 1.2 if not provided
        '& .MuiSvgIcon-root': {
            fontSize: iconsize || 28, // Default icon size to 28 if not provided
        },
        color: iconcolor || '#000', // Default color if not provided

        '@media (min-width: 853px) and (min-height: 1193px)': {
            '& .MuiSvgIcon-root': {
                fontSize: iconsize1600x2560 || 40,
            },
        },
    })
);

const getLabelSize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth >= 853 && windowHeight >= 1193) {
        return '3rem';
    }

    if (windowWidth <= 1600) {
        return '1.4rem';
    } else if (windowWidth > 1600 && windowWidth <= 1920) {
        return '2rem';
    } else if (windowWidth > 1920 && windowWidth < 2560) {
        return '3rem';
    } else if (windowWidth >= 2560) {
        return '4rem';
    }
};


export const CustomCheckbox = ({
    label,
    $labelColor,
    $scale,
    $iconSize,
    $iconColor,
    $onChange,
    $value,
    $iconsize1600x2560,
    checked,
}) => (
    <FormControlLabel
        control={
            <MaterialCheckbox
                scale={$scale}
                iconsize={$iconSize}
                iconcolor={$iconColor}
                value={$value}
                onChange={$onChange}
                iconsize1600x2560={$iconsize1600x2560}
                checked={checked}
            />
        }
        label={label}
        sx={{
            color: $labelColor || '#000',
        }} 
        slotProps={{
            typography: {
                fontSize: getLabelSize(),
            }
        }}
    />
);

CustomCheckbox.propTypes = {
    label: PropTypes.string.isRequired, 
    $labelColor: PropTypes.string, 
    $scale: PropTypes.number, 
    $iconSize: PropTypes.number, 
    $iconColor: PropTypes.string,
    $onChange: PropTypes.func,
    $value: PropTypes.number,
    $iconsize1600x2560: PropTypes.string,
    checked: PropTypes.bool,
};
