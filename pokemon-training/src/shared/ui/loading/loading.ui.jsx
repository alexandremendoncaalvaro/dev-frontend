import { styled, CircularProgress } from '@mui/material';

export const Loading = styled(CircularProgress)(
    ({ color }) => ({
    color: color || 'gray',
}));
