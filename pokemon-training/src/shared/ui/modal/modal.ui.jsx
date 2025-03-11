import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

export const BasicModal = ({ children, open, onClose }) => {
    return (
        
            <Modal
                id="modal"
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {children}
            </Modal>
       
    );
};

BasicModal.propTypes = {
    children: PropTypes.node, 
    open: PropTypes.bool, 
    onClose: PropTypes.func, 
};
