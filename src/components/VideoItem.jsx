import React from 'react';
import './VideoItem.css';

const VideoItem = ({ title }) => {
    return (
        <div className="video-item">
            <div className="thumbnail-placeholder">
                썸네일
            </div>
            <div className="video-info">
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default VideoItem;