import './MemoItem.css';

const MemoItem = ({ title, content, id, onDelete, onClick }) => {
    return (
        <div className="memo-item" onClick={onClick}>
            <div className="memo-content-wrapper">
                <span className="memo-icon">📝</span>
                <div className="memo-text">
                    <strong>{title}</strong>
                    <span>{content}</span>
                </div>
            </div>
            <button 
                className="memo-delete-btn" 
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(id);
                }}
            >
                {/* 쓰레기통 아이콘 */}
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                >
                    <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                </svg>
            </button>
        </div>
  );
}

export default MemoItem;