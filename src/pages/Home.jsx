import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import VideoItem from "../components/VideoItem";
import MemoItem from "../components/MemoItem";
import MemoModal from "../components/MemoModal";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [urlInput, setUrlInput] = useState("");
    const [videos, setVideos] = useState([]); 
    const [memos, setMemos] = useState([]);
    const [selectedMemo, setSelectedMemo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const savedVideos = JSON.parse(localStorage.getItem("videos") || "[]");
        const savedMemos = JSON.parse(localStorage.getItem("memos") || "[]");
        setVideos(savedVideos);
        setMemos(savedMemos);
    }, []);

    const extractVideoId = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };

    const handleAddVideo = () => {
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
    };

    const handleDeleteVideo = (id) => {
        if (window.confirm("이 영상을 목록에서 삭제할까요?")) {
            const updatedVideos = videos.filter((v) => v.id !== id);
            setVideos(updatedVideos);
            localStorage.setItem("videos", JSON.stringify(updatedVideos));
        }
    };

    const handleDeleteMemo = (id) => {
        if (window.confirm("정말 이 메모를 삭제할까요?")) {
            const updatedMemos = memos.filter((m) => m.id !== id);
            setMemos(updatedMemos);
            localStorage.setItem("memos", JSON.stringify(updatedMemos));
            
            if (selectedMemo && selectedMemo.id === id) {
                setSelectedMemo(null);
            }
        }
    };

    const closeMemoModal = () => {
        setSelectedMemo(null);
    };

    return (
        <div className="home-layout">
            <div className="main-content">
                <div className="page-container">
                    <div className="title-section">
                        <h2>📚 나만의 학습 플레이리스트</h2>
                        <p>유튜브 링크를 넣어 학습할 영상을 모아보세요!</p>
                    </div>

                    <div className="input-section">
                        <input 
                            type="text" 
                            placeholder="유튜브 영상 링크를 붙여넣으세요!" 
                            className="url-input"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                        />
                        <button className="add-btn" onClick={handleAddVideo}>추가</button>
                    </div>

                    <div className="video-grid">
                        {videos.length === 0 && (
                            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#999', padding: '20px'}}>
                                등록된 영상이 없습니다.
                            </p>
                        )}
                        {videos.map((video) => (
                            <div key={video.id} onClick={() => navigate(`/watch/${video.id}`)}>
                                <VideoItem 
                                    id={video.id}
                                    title={video.title}
                                    thumbnail={video.thumbnail}
                                    onDelete={handleDeleteVideo}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? '>' : '<'}
                </button>
                <div className="sidebar-content">
                    <h3>📂 저장된 메모</h3>
                    <br />
                    {memos.length === 0 ? (
                        <p style={{fontSize: '0.8rem', color: '#ccc'}}>등록된 메모가 없습니다.</p>
                    ) : (
                        memos.map((memo) => (
                            <MemoItem 
                                key={memo.id}
                                id={memo.id}
                                title={memo.title} 
                                content={memo.content}
                                onDelete={handleDeleteMemo}
                                onClick={() => setSelectedMemo(memo)} 
                            />
                        ))
                    )}
                </div>
            </div>

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