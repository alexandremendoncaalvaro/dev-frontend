import Select from '@mui/material/Select';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

const MaterialSelect = styled(Select)(
    ({
        $fontSize,
        $width,
        $color,
        $paddingBottom,
        $selectBackgroundColor,
        $borderColor,
        $borderRadius,

        //1600x2560
        $fontSize1600x2560,
        $width1600x2560,
        $height1600x2560,
        $p1600x2560,
        $borderRadius1600x2560,

        //1366to1600
        $fontSize1366to1600,
        $width1366to1600,

        //1024to1366
        $fontSize1024to1366,
        $width1024to1366,

        //390to1024
        $selectBackgroundColor390to1024,
        $fontSize390to1024,
        $width390to1024,
    }) => ({
        width: $width || '200px',
        '& .MuiInputBase-input': {
            color: $color || '#000', // Text color
            fontSize: $fontSize || '1.5rem',

            backgroundColor: $selectBackgroundColor,
            paddingBottom: $paddingBottom || '0.5rem',
            borderRadius: $borderRadius,
        },

        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: $borderColor || $color || '#000', // Border color
        },

        '& .MuiSvgIcon-root': {
            color: $color || '#000', // Icon color
        },

        //1366to1600
        '@media (min-width: 1366px) and (max-width: 1600px)': {
            fontSize: $fontSize1366to1600,
            width: $width1366to1600,
        },

        //1024to1366
        '@media (min-width: 1024px) and (max-width: 1367px)': {
            width: $width1024to1366,
            '& .MuiInputBase-input': {
                fontSize: $fontSize1024to1366,
            },
        },

        //390to1024
        '@media (min-width: 390px) and (max-width: 1024px)': {
            width: $width390to1024,
            '& .MuiInputBase-input': {
                fontSize: $fontSize390to1024,
                backgroundColor: $selectBackgroundColor390to1024,
            },
            '& .MuiSelect-select': {
                paddingTop: '2.5rem',
                minHeight: '4rem !important',
            },
        },

        //1600x2560
        '@media (min-width: 853px) and (min-height: 1193px)': {
            width: $width1600x2560,
            height: $height1600x2560,
            '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: $borderRadius1600x2560,
            },
            '& .MuiInputBase-input': {
                fontSize: $fontSize1600x2560 || '2.5rem',
                padding: $p1600x2560,
            },
            '& .MuiSvgIcon-root': {
                width: '5rem',
                height: '5rem',
                top: '1rem',
            },
            '& .MuiButtonBase-root .MuiMenuItem-root .MuiMenuItem-gutters .Mui-selected .MuiMenuItem-root .MuiMenuItem-gutters .Mui-selected ':
                {
                    fontSize: '20rem',
                },
        },
    })
);

export const CustomSelect = ({
    $selectId,
    $label,
    $value,
    $onChange,
    $options,
    $labelFontSize,
    $selectFontSize,
    $selectWidth,
    $selectColor,
    $labelColor,
    $borderColor,
    $borderRadius,
    $paddingBottom,
    $hoverBorderColor,
    $focusedLabelColor,
    $labelNotFocusedTranslateY,
    $labelNotFocusedTranslateX,
    $labelNotFocusedScale,
    $labelFocusedTranslateY,
    $labelFocusedTranslateX,
    $labelFocusedScale,
    $selectBackgroundColor,
    $includeAll,
    $placeholder,
    translate,
    $showOptionId,

    //1600x2560
    $selectFontSize1600x2560,
    $selectWidth1600x2560,
    $p1600x2560,
    $selectHeight1600x2560,
    $borderRadius1600x2560,

    //1024to1366
    $selectFontSize1024to1366,
    $selectWidth1024to1366,
    $labelFontSize1024to1366,

    //1366to1600
    $selectFontSize1366to1600,
    $selectWidth1366to1600,
    $labelFontSize1366to1600,

    //390to1024
    $selectBackgroundColor390to1024,
    $selectFontSize390to1024,
    $selectWidth390to1024,
    $labelFontSize390to1024,
}) => (
    <FormControl
        variant="outlined"
        fullWidth
        sx={{
            '& .MuiInputLabel-root': {
                fontSize: $labelFontSize || '1rem',
                color: $labelColor || $selectColor || '#000', // Label color
                transform:
                    $value && $value !== ''
                        ? `translate(${$labelFocusedTranslateX}, ${$labelFocusedTranslateY}) scale(${$labelFocusedScale})`
                        : `translate(${$labelNotFocusedTranslateX}, ${$labelNotFocusedTranslateY}) scale(${$labelNotFocusedScale})`,

                //1366to1600
                '@media (min-width: 1366px) and (max-width: 1600px)': {
                    fontSize: $labelFontSize1366to1600 || '1rem',
                },

                //1024to1366
                '@media (min-width: 1024px) and (max-width: 1367px)': {
                    fontSize: $labelFontSize1024to1366 || '0.5rem',
                },

                //390to1024
                '@media (min-width: 390px) and (max-width: 1024px)': {
                    fontSize: $labelFontSize390to1024 || '0.5rem',
                },
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                    borderColor:
                        $borderColor || $selectColor || 'var(--main-text)', // Focused border color
                },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: $hoverBorderColor || $selectColor || '#000', // Hover border color
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: $focusedLabelColor || $selectColor || '#000', // Focused label color
            },
        }}
    >
        {$label && <InputLabel id={$selectId}>{$label}</InputLabel>}
        <MaterialSelect
            labelId={$selectId}
            id={$selectId}
            value={$value || translate('common.all')}
            label={$label ? $label + '&nbsp' : ''}
            onChange={$onChange}
            $fontSize={$selectFontSize}
            $width={$selectWidth}
            $color={$selectColor}
            $paddingBottom={$paddingBottom}
            $hoverBorderColor={$hoverBorderColor}
            $selectBackgroundColor={$selectBackgroundColor}
            $borderColor={$borderColor}
            $borderRadius={$borderRadius}
            displayEmpty
            MenuProps={{
                PaperProps: {
                    sx: {
                        '& .MuiMenuItem-root': {
                            fontSize: $selectFontSize || '1rem',
                        },
                        '@media (min-width: 1559px) and (min-height: 2559px)': {
                            '& .MuiMenuItem-root': {
                                fontSize: $selectFontSize1600x2560 || '1.5rem',
                            },
                        },
                        '@media (min-width: 1024px) and (max-width: 1367px)': {
                            '& .MuiMenuItem-root': {
                                fontSize:
                                    $selectFontSize1024to1366 || '0.75rem',
                            },
                        },
                        '@media (min-width: 390px) and (max-width: 1024px)': {
                            '& .MuiMenuItem-root': {
                                fontSize: $selectFontSize390to1024 || '0.75rem',
                            },
                        },
                    },
                },
            }}
            renderValue={(selected) =>
                selected && selected !== ''
                    ? selected
                    : $placeholder || translate('common.selectOption')
            }
            //1600x2560
            $p1600x2560={$p1600x2560}
            $fontSize1600x2560={$selectFontSize1600x2560}
            $width1600x2560={$selectWidth1600x2560}
            $height1600x2560={$selectHeight1600x2560}
            $borderRadius1600x2560={$borderRadius1600x2560}
            //1366to1600
            $fontSize1366to1600={$selectFontSize1366to1600}
            $width1366to1600={$selectWidth1366to1600}
            //1024to1366
            $fontSize1024to1366={$selectFontSize1024to1366}
            $width1024to1366={$selectWidth1024to1366}
            //390to1024
            $fontSize390to1024={$selectFontSize390to1024}
            $width390to1024={$selectWidth390to1024}
            $selectBackgroundColor390to1024={$selectBackgroundColor390to1024}
        >
            {$includeAll && (
                <MenuItem value={translate('common.all')}>
                    {translate('common.all')}
                </MenuItem>
            )}
            {$options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {$showOptionId && option.value}
                    {option.label}
                </MenuItem>
            ))}
        </MaterialSelect>
    </FormControl>
);

CustomSelect.propTypes = {
    $selectId: PropTypes.string,
    $label: PropTypes.string,
    $value: PropTypes.string,
    $onChange: PropTypes.func,
    $options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            label: PropTypes.string,
        })
    ),
    $selectFontSize: PropTypes.string,
    $selectWidth: PropTypes.string,
    $selectColor: PropTypes.string,
    $borderColor: PropTypes.string,
    $borderRadius: PropTypes.string,
    $paddingBottom: PropTypes.string,
    $selectBackgroundColor: PropTypes.string,
    $includeAll: PropTypes.bool,
    translate: PropTypes.func.isRequired,
    $labelFontSize: PropTypes.string,
    $labelColor: PropTypes.string,
    $hoverBorderColor: PropTypes.string,
    $focusedLabelColor: PropTypes.string,
    $labelNotFocusedTranslateY: PropTypes.string,
    $labelNotFocusedTranslateX: PropTypes.string,
    $labelNotFocusedScale: PropTypes.string,
    $labelFocusedTranslateY: PropTypes.string,
    $labelFocusedTranslateX: PropTypes.string,
    $labelFocusedScale: PropTypes.string,
    $placeholder: PropTypes.string,
    $showOptionId: PropTypes.bool,
    // Media query props
    $selectFontSize1600x2560: PropTypes.string,
    $selectWidth1600x2560: PropTypes.string,
    $selectHeight1600x2560: PropTypes.string,
    $p1600x2560: PropTypes.string,
    $borderRadius1600x2560: PropTypes.string,
    $selectFontSize1024to1366: PropTypes.string,
    $selectWidth1024to1366: PropTypes.string,
    $labelFontSize1024to1366: PropTypes.string,
    $selectFontSize1366to1600: PropTypes.string,
    $selectWidth1366to1600: PropTypes.string,
    $labelFontSize1366to1600: PropTypes.string,
    $selectFontSize390to1024: PropTypes.string,
    $selectWidth390to1024: PropTypes.string,
    $labelFontSize390to1024: PropTypes.string,
    $selectBackgroundColor390to1024: PropTypes.string,
};
