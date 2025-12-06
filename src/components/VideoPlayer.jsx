import { useState } from "react";
import Youtube from 'react-youtube';
import "./VideoPlayer.css";

const VideoPlayer = ({ videoId }) => {
    const [isLoading, setIsLoading] = useState(true);

    // 유튜브 옵션
    const opts = {
        height: "100%",
        width: "100%",
        playerVars: { autoplay: 1 },
    };

    return (
        <div className="video-section">
            {isLoading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>영상을 불러오고 있어요...</p>
                </div>
            )}

            <Youtube    
                videoId={videoId}
                opts={opts}
                className="youtube-frame"
                onReady={() => setIsLoading(false)}
            />
        </div>
    );
};

export default VideoPlayer;