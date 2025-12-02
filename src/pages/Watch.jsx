import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Youtube from "react-youtube"; 
import "./Watch.css";

const Watch = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { videoId } = useParams();

    // 유튜브 옵션
    const opts = {
        height: "100%",
        width: "100%",
        playerVars: { autoplay: 1 },
    };

    // 데이터 불러오기
    useEffect(() => {
        const savedVideos = JSON.parse(localStorage.getItem("videos") || "[]");
        const currentVideo = savedVideos.find(v => v.id === videoId);
        
        if (currentVideo && !currentVideo.title.startsWith("새로운 강의")) {
            setTitle(currentVideo.title);
        }

        const savedMemos = JSON.parse(localStorage.getItem("memos") || "[]");
        const currentMemo = savedMemos.find(m => m.videoId === videoId);
        
        if (currentMemo) {
            setContent(currentMemo.content);
            if (!title) setTitle(currentMemo.title); 
        }
    }, [videoId]);

    // 메모 저장
    const handleSaveMemo = useCallback(() => {
        if (!title || !content) {
            return alert("제목과 메모 내용을 모두 입력해주세요!");
        }

        const existingMemos = JSON.parse(localStorage.getItem("memos") || "[]");
        const targetIndex = existingMemos.findIndex(m => m.videoId === videoId);
        
        let updatedMemos;

        if (targetIndex !== -1) {
            updatedMemos = existingMemos.map((memo, index) => {
                if (index === targetIndex) {
                    return { ...memo, title, content };
                }
                return memo;
            });
        } else {
            const newMemo = {
                id: Date.now(),
                videoId: videoId,
                title: title,
                content: content,
            };
            updatedMemos = [newMemo, ...existingMemos];
        }
        
        localStorage.setItem("memos", JSON.stringify(updatedMemos));

        const savedVideos = JSON.parse(localStorage.getItem("videos") || "[]");
        const updatedVideos = savedVideos.map(video => {
            if (video.id === videoId) {
                return { ...video, title: title };
            }
            return video;
        });
        localStorage.setItem("videos", JSON.stringify(updatedVideos));

        alert("저장되었습니다! ✅");
        navigate("/");
    }, [title, content, videoId, navigate]);

    return (
        <div>
            {/* 뒤로가기 버튼 */}
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

            {/* 플레이어 & 메모장 영역 */}
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
                        placeholder="강의 내용을 요약해보세요..." 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button className="save-btn" onClick={handleSaveMemo}>저장하기</button>
                </div>
            </div>
        </div>
    );
}

export default Watch;