import './Sidebar.css';
import MemoItem from './MemoItem';

const Sidebar = ({ memos, onDelete, onClick }) => {
    return (
        <div className={"sidebar"}>
            <div className="sidebar-content">
                <h3>📂 저장된 메모</h3>
                <br />
                {memos.length === 0 ? (
                    <p className="empty-memo">등록된 메모가 없습니다.</p>
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