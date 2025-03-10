import { Container } from '@shared/ui';
import { PaginationButton } from './PaginationButton';

export const Pagination = ({ onPrevious, onNext }) => {
    return (
        <Container
            $w="fit-content"
            $display="flex"
            $flexDirection="column"
            $justifyContent="space-evenly"
            $p="1rem"
        >
            <PaginationButton 
                direction="previous"
                onClick={onPrevious}
            />
            <PaginationButton 
                direction="next"
                onClick={onNext}
            />
        </Container>
    );
}; 