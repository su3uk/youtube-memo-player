import React from "react";
import "./Watch.css";

const Watch = () => {
    return (
        <div className="watch-container">
            <div className="video-section">
                <h3>유튜브 플레이어 자리</h3>
            </div>
            <div className="memo-section">
                <h3>📝 메모장</h3>
            <textarea 
                className="memo-input" 
                placeholder="여기에 메모를 입력하세요..." 
            />
            <button className="save-btn">저장하기</button>
            </div>
        </div>
    )
}

export default Watch;