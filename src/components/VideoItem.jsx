import './VideoItem.css';

const VideoItem = ({ title, thumbnail, id, onDelete }) => {
    return (
        <div className="video-item">
            <div className="thumbnail-placeholder">
                <img src={thumbnail} alt="썸네일" style={{width: "100%", height: "100%", objectFit: "cover"}} />
            </div>
            <div className="video-info">
                <h3>{title}</h3>
                <button 
                    className="video-delete-btn"
                    title="목록에서 삭제"
                    onClick={(e) => {
                        e.stopPropagation(); // ✋ 중요: 부모의 클릭 이벤트(페이지 이동)를 막는다!
                        onDelete(id);
                    }}
                >
                    <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                    >
                        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default VideoItem;