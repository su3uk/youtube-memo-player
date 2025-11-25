import React from 'react';
import './MemoItem.css';

// title(영상제목), content(메모내용)을 받아옴
const MemoItem = ({ title, content }) => {
    return (
        <div className="memo-item">
            <span className="memo-icon">📝</span>
            <div className="memo-text">
                <strong>{title}</strong>
                <span>{content}</span>
            </div>
        </div>
  );
}

export default MemoItem;