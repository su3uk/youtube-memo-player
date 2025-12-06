import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import VideoInput from "../components/VideoInput";
import VideoList from "../components/VideoList";
import Sidebar from "../components/Sidebar";
import MemoModal from "../components/MemoModal";
import { setPageTitle, extractVideoId } from "../util";

const Home = () => {
    const [urlInput, setUrlInput] = useState("");
    const [videos, setVideos] = useState([]);
    const [memos, setMemos] = useState([]);
    const [selectedMemo, setSelectedMemo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setPageTitle("유튜브 메모 플레이어");

        const savedVideos = JSON.parse(localStorage.getItem("videos") || "[]");
        const savedMemos = JSON.parse(localStorage.getItem("memos") || "[]");
        setVideos(savedVideos);
        setMemos(savedMemos);
    }, []);

    // 비디오 추가
    const handleAddVideo = useCallback(() => {
        if (!urlInput) return alert("링크를 입력해주세요!");
        const videoId = extractVideoId(urlInput);
        if (!videoId) return alert("유효한 유튜브 링크가 아닙니다!");
        if (videos.some(v => v.id === videoId)) {
            alert("이미 리스트에 있는 영상입니다!");
            setUrlInput("");
            navigate(`/watch/${videoId}`);
            return;
        }
        const newVideo = {
            id: videoId,
            title: `새로운 강의 (${videoId})`,
            thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        };
        const updatedVideos = [...videos, newVideo];
        setVideos(updatedVideos);
        localStorage.setItem("videos", JSON.stringify(updatedVideos));

        setUrlInput("");
        navigate(`/watch/${videoId}`);        
    }, [urlInput, videos, navigate]);

    // 비디오 삭제
    const handleDeleteVideo = useCallback((id) => {
        if (window.confirm("이 영상을 목록에서 삭제할까요?")) {
            const updatedVideos = videos.filter((v) => v.id !== id);
            setVideos(updatedVideos);
            localStorage.setItem("videos", JSON.stringify(updatedVideos));
        }
    }, [videos]);

    // 메모 삭제
    const handleDeleteMemo = useCallback((id) => {
        if (window.confirm("정말 이 메모를 삭제할까요?")) {
            const updatedMemos = memos.filter((m) => m.id !== id);
            setMemos(updatedMemos);
            localStorage.setItem("memos", JSON.stringify(updatedMemos));
            
            if (selectedMemo && selectedMemo.id === id) {
                setSelectedMemo(null);
            }
        }
    }, [memos, selectedMemo]);

    // 메모 모달창 닫기
    const closeMemoModal = () => {
        setSelectedMemo(null);
    };

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddVideo(); // 엔터키면 추가 함수 실행!
        }
    };

    return (
        <div className="home-layout">
            <div className="main-content">
                <div className="page-container">
                    {/* 비디오 링크 인풋 영역 */}
                    <VideoInput 
                        urlInput={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        onAdd={handleAddVideo}
                        onKeyDown={handleOnKeyPress}
                    />
                    {/* 비디오 리스트 영역 */}
                    <VideoList 
                        videos={videos}
                        onVideoClick={(id) => navigate(`/watch/${id}`)}
                        onDelete={handleDeleteVideo}
                    />
                </div>
            </div>
            {/* 사이드바 영역 */}
            <Sidebar 
                memos={memos}
                onDelete={handleDeleteMemo}
                onClick={setSelectedMemo}
            />
            {/* 메모 모달창 영역 */}
            {selectedMemo && (
                <MemoModal 
                    memo={selectedMemo} 
                    onClose={closeMemoModal} 
                />
            )}
        </div>
    );
}

export default Home;