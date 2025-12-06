import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import MemoPad from "../components/MemoPad";
import { setPageTitle } from "../util";
import "./Watch.css";

const Watch = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { videoId } = useParams();

    useEffect(() => {
        const savedVideos = JSON.parse(localStorage.getItem("videos") || "[]");
        const currentVideo = savedVideos.find(v => v.id === videoId);
        
        if (currentVideo && !currentVideo.title.startsWith("새로운 강의")) {
            setTitle(currentVideo.title);
        }

        let displayTitle = "영상 시청 중";

        if (currentVideo) {
            if (!currentVideo.title.startsWith("새로운 강의")) {
                setTitle(currentVideo.title);
                displayTitle = currentVideo.title;
            }
        }

        setPageTitle(`${displayTitle} | 메모 플레이어`);

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
            <div className="watch-nav">
                {/* 뒤로가기 버튼 */}
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
            <div className="watch-container">
                {/* 플레이어 영역 */}
                <VideoPlayer videoId={videoId} />
                {/* 메모장 영역 */}
                <MemoPad 
                    content={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    onSave={handleSaveMemo} 
                />
            </div>
        </div>
    );
}

export default Watch;