import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="page-container">
            <h2>내 강의 목록</h2>
            <p>여기에 저장된 영상 리스트가 뜰 예정입니다.</p>
            <button className="add-btn">+ 영상 추가하기</button>
            <div className="memo-placeholder">
                메모 아이콘 추가
            </div>
        </div>
    )
}

export default Home;