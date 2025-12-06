import "./VideoInput.css";

const VideoInput = ({ urlInput, onChange, onAdd, onKeyDown }) => {
    return (
        <div className="video-input-container">
            <div className="title-area">
                <h2>나만의 학습 플레이리스트</h2>
                <p>유튜브 링크를 넣어 학습할 영상을 모아보세요!</p>
            </div>

            <div className="input-area">
                <input 
                    type="text" 
                    placeholder="유튜브 영상 링크를 붙여넣으세요!" 
                    className="url-input"
                    value={urlInput}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <button className="add-btn" onClick={onAdd}>추가</button>
            </div>
        </div>
    );
};

export default VideoInput;