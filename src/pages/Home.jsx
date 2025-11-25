import React, { useState } from 'react';
import './Home.css';
import VideoItem from '../components/VideoItem';
import MemoItem from '../components/MemoItem';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
                        />
                        <button className="add-btn">추가</button>
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
                    {isSidebarOpen ? '>' : '<'} {/* 열려있으면 >, 닫혀있으면 < */}
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