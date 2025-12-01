import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <svg 
                    width="42" 
                    height="42" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                >
                    {/* 유튜브 로고 */}
                    <path 
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" 
                        fill="#FF0000"
                    />
                    <path 
                        d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
                        fill="white"
                    />

                    {/* 메모 아이콘 */}
                    <g transform="translate(15, 11) rotate(10)">
                        <rect x="0" y="0" width="9" height="11" rx="1" fill="#FEF08A" stroke="#EAB308" strokeWidth="0.8" />
                        <path d="M2.5 3.5H6.5" stroke="#EAB308" strokeWidth="0.8" strokeLinecap="round"/>
                        <path d="M2.5 6.5H6.5" stroke="#EAB308" strokeWidth="0.8" strokeLinecap="round"/>
                        <path d="M2.5 9.5H5" stroke="#EAB308" strokeWidth="0.8" strokeLinecap="round"/>
                    </g>
                </svg>
                <h1>유튜브 메모 플레이어</h1>
            </div>
        </header>
    );
}

export default Header;