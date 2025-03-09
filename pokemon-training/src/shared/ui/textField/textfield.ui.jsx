import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

export const CustomTextField = styled(({ type = 'text', endAdornment, ...props }) => (
  <TextField
    {...props}
    type={type}
    InputProps={{
      endAdornment: endAdornment,
    }}
  />
))(({ $br, $p, $width, $fontSize, $color, $borderWidth }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: $color,
      borderRadius: $br,
      borderWidth: $borderWidth || '2px',
      fontSize: $fontSize,
    },
    '&:hover fieldset': {
      borderColor: $color,
      fontSize: $fontSize,
    },
    '&.Mui-focused fieldset': {
      borderColor: $color,
    },
  },
  '& .MuiInputBase-input': {
    fontSize: $fontSize,
    width: $width,
    padding: $p,
    color: $color,
  },
  '& .MuiInputLabel-root': {
    color: $color,
    fontSize: $fontSize,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiInputLabel-root': {
    color: $color,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input': {
    color: $color,
  },
}));

