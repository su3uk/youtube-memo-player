import Modal from 'react-modal';
import './MemoModal.css';

Modal.setAppElement('#root');

const MemoModal = ({ memo, onClose }) => {

    if (!memo) return null;

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            contentLabel="Memo Detail"
            
            className="custom-content"
            overlayClassName="custom-overlay"
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