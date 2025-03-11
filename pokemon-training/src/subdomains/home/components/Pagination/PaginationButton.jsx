import { Button } from '@shared/ui';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const PaginationButton = ({ direction, onClick }) => {
    const rotateValue = direction === 'previous' ? '-90deg' : '90deg';
    const boxShadowValue = direction === 'previous' 
        ? "inset -5px 1px 0px rgba(0, 0, 0, 0.4), -5px 3px 0px rgba(0, 0, 0, 0.3)"
        : "inset 4px -3px 0px rgba(0, 0, 0, 0.4), 7px -3px 0px rgba(0, 0, 0, 0.3)";

    return (
        <Button
            $rotate={rotateValue}
            $boxShadow={boxShadowValue}
            onClick={onClick}
        >
            <PlayArrowIcon fontSize="large"/>
        </Button>
    );
}; 