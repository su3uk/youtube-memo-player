import './Sidebar.css';
import MemoItem from './MemoItem';

const Sidebar = ({ isOpen, onToggle, memos, onDelete, onClick }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-btn" onClick={onToggle}>
                {isOpen ? '>' : '<'}
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
                            onDelete={onDelete}
                            onClick={() => onClick(memo)} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Sidebar;