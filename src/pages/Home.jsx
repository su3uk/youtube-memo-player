import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Home.css";
import VideoItem from "../components/VideoItem";
import MemoItem from "../components/MemoItem";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [urlInput, setUrlInput] = useState("");
    const navigate = useNavigate();

    const extractVideoId = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }

    const handleAddVideo = () => {
        if(!urlInput) {
            alert("링크를 입력해주세요!");
            return;
        }

        const videoId = extractVideoId(urlInput);

        if(!videoId) {
            alert("유효한 유튜브 링크가 아닙니다!");
            return;
        }

        navigate(`/watch/${videoId}`);
    }

    return (
        <div className="home-layout">
            {/* 1. 왼쪽: 메인 컨텐츠 영역 */}
            <div className="main-content">
                <div className="page-container">
                    <div className="title-section">
                        <h2>📚 나만의 학습 플레이리스트</h2>
                        <p>유튜브 링크를 넣어 집중할 영상만 모아보세요.</p>
                    </div>

                    <div className="input-section">
                        <input 
                            type="text" 
                            placeholder="유튜브 영상 링크를 붙여넣으세요" 
                            className="url-input"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                        />
                        <button className="add-btn" onClick={handleAddVideo}>추가</button>
                    </div>

                    <div className="video-grid">
                        <VideoItem title="리액트 기초 강의 1강" />
                        <VideoItem title="자바스크립트 마스터하기" />
                    </div>
                </div>
            </div>

            {/* 2. 오른쪽: 메모 사이드바 영역 */}
            {/* isSidebarOpen이 true면 'open', false면 'closed' 클래스가 붙음 */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? '>' : '<'}
                </button>
                <div className="sidebar-content">
                    <h3>📂 저장된 메모</h3>
                    <p className="sidebar-desc">최근 작성한 메모들입니다.</p>
                    <MemoItem title="리액트 기초 1강" content="useState 훅 사용법 정리..." />
                    <MemoItem title="자바스크립트 변수" content="let과 const의 차이점..." />
                </div>
            </div>
        </div>
  );
}

export default Home;