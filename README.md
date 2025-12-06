# 📺 유튜브 메모 플레이어 (Youtube Memo Player)

> **"유튜브 영상을 실시간으로 메모하면서 학습하세요."**<br/>
> 유튜브 영상과 개인 메모를 한 화면에서 관리하는 학습 전용 플레이어입니다.

<br/>

## 🚀 배포 주소
👉 **[페이지 바로가기](https://su3uk.github.io/youtube-memo-player/)**

<br/>

## 🛠️ 기술 스택 (Tech Stack)
| 분류 | 기술 |
| :-- | :-- |
| **Front-end** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| **Style** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| **Library** | `react-router-dom`, `react-youtube`, `react-modal` |
| **Storage** | LocalStorage (브라우저 영구 저장) |

<br/>

## ✨ 핵심 기능
* **🎯 영상 등록:** 유튜브 링크를 복사해 넣으면 ID를 자동 추출하여 등록
* **📝 실시간 메모:** 영상별 1:1 매칭되는 전용 메모장 제공
* **💾 영구 저장:** 새로고침 해도 사라지지 않는 데이터 (LocalStorage)
* **🗑️ CRUD 완벽 구현:** 비디오/메모의 추가, 조회, 수정, 삭제 기능

<br/>

## 📂 폴더 구조 (Directory Structure)
```text
src/
├── components/          # 재사용 가능한 UI 컴포넌트 모음
│   ├── Header/          # 상단 로고 및 제목
│   ├── VideoInput/      # 영상 링크 입력 및 추가
│   ├── VideoList/       # 추가된 영상 목록 표시
│   ├── VideoItem/       # 개별 영상 카드 UI
│   ├── Sidebar/         # 우측 메모 목록 표시 사이드바
│   ├── MemoItem/        # 개별 메모 카드 UI
│   ├── MemoModal/       # 메모 상세 보기 팝업
│   ├── VideoPlayer/     # 유튜브 영상 재생 화면
│   └── MemoPad/         # 영상별 메모 작성 및 저장
│
├── pages/               # 라우팅 되는 페이지 단위
│   ├── Home.jsx         # 메인 화면 (비디오/메모 관리)
│   └── Watch.jsx        # 시청 화면 (영상 재생/메모 작성)
│
├── utils/               # 공통 로직 함수
│   └── util.js          # 유튜브 ID 추출 및 페이지 제목 설정
│
├── App.jsx              # 전체 레이아웃 및 라우팅 설정
└── main.jsx             # 애플리케이션 진입점 (Entry Point)