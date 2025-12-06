import "./VideoList.css";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick, onDelete }) => {
    return (
        <div className="video-grid">
            {videos.length === 0 && (
                <p className="empty-message">
                    등록된 영상이 없습니다.
                </p>
            )}
            {videos.map((video) => (
                <div key={video.id} onClick={() => onVideoClick(video.id)}>
                    <VideoItem 
                        id={video.id}
                        title={video.title}
                        thumbnail={video.thumbnail}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
};

export default VideoList;