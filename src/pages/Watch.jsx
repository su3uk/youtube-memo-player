import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Youtube from "react-youtube"; 
import "./Watch.css";

const Watch = () => {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const { videoId } = useParams();

    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div>
            {/* 뒤로 가기 버튼 */}
            <div className="watch-nav">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ⬅ 목록으로
                </button>
                <input
                    type="text"
                    className="title-input"
                    placeholder="이 영상의 제목을 입력하세요."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {/* 비디오 메모 영억 */}
            <div className="watch-container">
                <div className="video-section">
                    <Youtube
                        videoId={videoId}
                        opts={opts}
                        className="youtube-frame"
                    />
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