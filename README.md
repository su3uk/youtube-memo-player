# 📺 유튜브 메모 플레이어 (Youtube Memo Player)

> **"알고리즘의 유혹 없이, 오직 학습에만 집중하세요."**
> 유튜브 영상과 개인 메모를 한 화면에서 관리하는 학습 전용 플레이어입니다.

<br/>

## 🚀 배포 주소
👉 **[서비스 바로가기](https://본인아이디.github.io/youtube-memo-player)**

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
├── components/    # 재사용 가능한 UI 컴포넌트
│   ├── VideoInput.jsx   # 영상 추가 입력창
│   ├── VideoList.jsx    # 영상 목록 리스트
│   ├── Sidebar.jsx      # 메모장 사이드바
│   └── ...
├── pages/         # 페이지 단위 컴포넌트 (Home, Watch)
└── utils/         # 로직 분리 (유튜브 ID 추출 등)