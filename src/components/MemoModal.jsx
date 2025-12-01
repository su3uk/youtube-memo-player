import Modal from 'react-modal';
import './MemoModal.css';

Modal.setAppElement('#root');

const MemoModal = ({ memo, onClose }) => {
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            maxWidth: '90%',
            padding: '30px',
            borderRadius: '12px',
            border: 'none',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        },
    };

    if (!memo) return null;

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Memo Detail"
        >
            <div className="modal-header">
                <h3>{memo.title}</h3>
            </div>
            
            <div className="modal-body">
                <p>{memo.content}</p>
            </div>
            
            <button className="close-modal-btn" onClick={onClose}>
                닫기
            </button>
        </Modal>
    );
};

export default MemoModal;