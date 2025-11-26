import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Watch.css";

const Watch = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* 뒤로 가기 버튼 */}
            <div className="watch-nav">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ⬅ 목록으로
                </button>
            </div>

            {/* 비디오 메모 영억 */}
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
        </div>
    )
}

export default Watch;