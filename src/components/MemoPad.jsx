import "./MemoPad.css";

const MemoPad = ({ content, onChange, onSave }) => {
    return (
        <div className="memo-section">
            <h3>📝 메모장</h3>
            <textarea 
                className="memo-input" 
                placeholder="강의 내용을 요약해보세요..." 
                value={content}
                onChange={onChange}
            />
            <button className="save-btn" onClick={onSave}>저장하기</button>
        </div>
    );
};

export default MemoPad;