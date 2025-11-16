# 재연(再緣) - Dolsing Dating App

![Progress](https://img.shields.io/badge/진행률-0%25-red)
![Status](https://img.shields.io/badge/Status-Planning-blue)
![Platform](https://img.shields.io/badge/Platform-Mobile%20Web-green)

> 돌싱(이혼 경험자)을 위한 신뢰 기반 프리미엄 소개팅 플랫폼

---

## 프로젝트 개요

- **목적**: 30~50대 이혼 경험자들을 위한 안전하고 신뢰할 수 있는 재혼/연애 매칭 서비스
- **타겟 사용자**: 30~50대 이혼 경험자 (돌싱), 미혼자도 가입 가능
- **환경**: 모바일 웹 → 네이티브 앱 패키징 (iOS/Android)
- **핵심 가치**: 신뢰, 안전, 프라이버시, 품격

---

## 기술 스택

### Frontend
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

### State Management
[![Zustand](https://img.shields.io/badge/Zustand-4+-000000?logo=zustand)](https://github.com/pmndrs/zustand)
[![React Query](https://img.shields.io/badge/React_Query-5+-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)

### UI Components
[![Headless UI](https://img.shields.io/badge/Headless_UI-1.7+-66E3FF?logo=headlessui&logoColor=white)](https://headlessui.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-1.0+-111111?logo=radixui&logoColor=white)](https://www.radix-ui.com/)

### Others
[![React Router](https://img.shields.io/badge/React_Router-6+-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7+-EC5990?logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3+-3E67B1?logo=zod&logoColor=white)](https://zod.dev/)

---

## 주요 기능

### 1. 회원 가입 및 인증
- **간편 가입**
  - 이메일 가입
  - SNS 간편 가입 (카카오, 네이버, 구글)
- **프로필 등록**
  - 사진 등록 (최소 3장, 최대 10장)
  - 기본 정보 (이혼 횟수, 자녀 유무/수, 지역, 나이)
  - 본인 인증 (휴대폰 인증)
- **배찌 인증 시스템** ⭐
  - 인서울 대학 졸업
  - 대기업 재직
  - 연봉 인증 (5천만원+, 1억+)
  - 자산 인증 (1억+, 3억+, 5억+)
  - 서류 제출 → 관리자 승인 → 배찌 부여

### 2. 매칭 시스템 (핵심 기능)
- **일일 프로필 카드 발행**
  - 하루 2회 발행 (오전 9시, 오후 6시)
  - 지역 및 나이 기반 자동 매칭
  - 각 1명씩 총 2명의 프로필 제공
- **프로필 단계별 공개**
  - 미리보기: 사진 1장 + 기본 정보
  - 상세 페이지: 자기소개, 추가 정보
  - 전체 사진: 프로필 오픈 시 (100 포인트)
- **다단계 매칭 액션**
  - **호감 보내기** (200P): 관심 표현, 상대에게 알림
  - **매칭 신청** (300P): 번호 교환 의사 표시
  - **소개팅 신청** (500P): 바로 만나기 의사 표시
  - **메시지 보내기** (500P): 자유로운 메시지 전달
  - **번호 확인** (500P): 전화번호 공개 (양쪽 매칭 승인 후)

### 3. 카드 관리 시스템
- **조회 이력 관리**
  - 봤던 프로필 자동 저장 (10일간 보관)
  - 10일 후 자동 삭제
- **필터링 기능**
  - 호감 보낸/받은 사람
  - 매칭 신청/받은 사람
  - 소개팅 신청/받은 사람
  - 메시지 보낸/받은 사람
  - 번호 확인한 사람

### 4. 커뮤니티 (게시판)
- **자유 게시판**
  - 자유로운 주제로 글 작성
  - 검색어 필터
  - 작성자 지역 표시
  - 작성자 프로필 보기 (200P)
- **번개 게시판**
  - 8가지 주제별 모임
    - 와인한잔, 소주한잔, 맥주한잔, 커피한잔
    - 드라이브, 산책, 저녁식사, 점심식사
  - 주제/지역/성별 필터
  - 사진 첨부 가능
  - 실시간 참여 신청

### 5. 포인트 시스템
- **포인트 충전**
  - 환율: 10원 = 1 포인트
  - 충전 단위: 1만원부터
  - 결제 수단: 카드, 카카오페이, 토스페이
  - 이벤트 할인 (관리자 설정)
- **포인트 사용**
  - 프로필 오픈: 100P
  - 호감 보내기: 200P
  - 매칭 신청: 300P (상대 승인 시 300P 추가)
  - 소개팅 신청: 500P (상대 승인 시 500P 추가)
  - 메시지 보내기: 500P
  - 번호 확인: 500P
- **포인트 내역**
  - 충전 내역 조회
  - 사용 내역 조회
  - 잔액 실시간 표시

### 6. 알림 시스템
- **푸시 알림**
  - 호감 받음
  - 매칭 신청 받음
  - 소개팅 신청 받음
  - 메시지 받음
  - 번호 확인됨
  - 프로필 카드 발행 (오전 9시, 오후 6시)
  - 시스템 공지
- **인앱 알림 센터**
  - 알림 목록
  - 읽음/안읽음 표시
  - 알림 클릭 시 해당 화면 이동

### 7. 마이페이지
- **프로필 관리**
  - 사진 변경/추가/삭제
  - 기본 정보 수정
  - 자기소개 수정
- **배찌 관리**
  - 보유 배찌 확인
  - 추가 배찌 신청
  - 신청 상태 확인
- **계정 관리**
  - 비밀번호 변경
  - 휴대폰 번호 변경
  - 알림 설정
  - 차단 목록 관리
- **활동 내역**
  - 포인트 충전/사용 내역
  - 매칭 활동 내역

### 8. 안전 및 보호 기능
- **신고 기능**
  - 부적절한 프로필 신고
  - 욕설/비방 신고
  - 사기 의심 신고
- **차단 기능**
  - 특정 사용자 차단
  - 차단 시 서로 프로필 노출 안 됨
- **개인정보 보호**
  - 이름 마스킹 (김**, 이**)
  - 전화번호 단계적 공개
  - 위치 정보는 구/군 단위까지만

### 9. 관리자 기능 (어드민)
- **배찌 관리**
  - 배찌 신청 승인/거부
  - 서류 확인
  - 배찌 종류별 요구 서류 설정
- **포인트 관리**
  - 각 기능별 포인트 비용 설정
  - 충전 이벤트 생성/수정
  - 충전 패키지 관리
- **사용자 관리**
  - 회원 목록 조회
  - 신고 처리
  - 이용 정지/탈퇴 처리
- **콘텐츠 관리**
  - 공지사항 작성
  - FAQ 관리
  - 게시글 관리 (삭제)
- **통계 및 분석**
  - 일일 활성 사용자
  - 매칭 성공률
  - 포인트 충전/사용 통계
  - 배찌별 통계

---

## 프로젝트 구조

```
src/
├── components/
│   ├── ui/                        # 재사용 가능한 UI 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── common/                    # 공통 컴포넌트
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   ├── BottomNav.tsx
│   │   ├── ProfileCard.tsx
│   │   └── NotificationBadge.tsx
│   ├── screens/                   # 화면 컴포넌트
│   │   ├── auth/                  # 인증 관련
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignupScreen.tsx
│   │   │   ├── ProfileSetupScreen.tsx
│   │   │   └── BadgeApplicationScreen.tsx
│   │   ├── home/                  # 홈 화면
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── TodayCardScreen.tsx
│   │   │   └── CardHistoryScreen.tsx
│   │   ├── profile/               # 프로필 관련
│   │   │   ├── ProfileDetailScreen.tsx
│   │   │   ├── ProfileEditScreen.tsx
│   │   │   └── MyProfileScreen.tsx
│   │   ├── matching/              # 매칭 관련
│   │   │   ├── MatchingListScreen.tsx
│   │   │   ├── ReceivedActionsScreen.tsx
│   │   │   └── SentActionsScreen.tsx
│   │   ├── community/             # 커뮤니티
│   │   │   ├── CommunityScreen.tsx
│   │   │   ├── FreeBoardScreen.tsx
│   │   │   ├── MeetupBoardScreen.tsx
│   │   │   └── PostDetailScreen.tsx
│   │   ├── points/                # 포인트
│   │   │   ├── PointsScreen.tsx
│   │   │   ├── ChargeScreen.tsx
│   │   │   └── HistoryScreen.tsx
│   │   └── settings/              # 설정
│   │       ├── SettingsScreen.tsx
│   │       ├── NotificationSettingsScreen.tsx
│   │       └── AccountSettingsScreen.tsx
│   └── layout/                    # 레이아웃
│       ├── AppLayout.tsx
│       └── AuthLayout.tsx
├── stores/                        # Zustand 전역 상태
│   ├── authStore.ts
│   ├── profileStore.ts
│   ├── pointsStore.ts
│   ├── notificationStore.ts
│   └── matchingStore.ts
├── hooks/                         # 커스텀 훅
│   ├── useAuth.ts
│   ├── usePoints.ts
│   ├── useProfileCard.ts
│   ├── useMatching.ts
│   └── usePushNotification.ts
├── services/                      # API 서비스
│   ├── api/
│   │   ├── auth.ts
│   │   ├── profile.ts
│   │   ├── matching.ts
│   │   ├── community.ts
│   │   ├── payment.ts
│   │   └── admin.ts
│   └── apiClient.ts
├── types/                         # TypeScript 타입
│   ├── auth.types.ts
│   ├── profile.types.ts
│   ├── matching.types.ts
│   ├── community.types.ts
│   └── api.types.ts
├── utils/                         # 유틸리티
│   ├── formatters.ts
│   ├── validators.ts
│   ├── imageHelper.ts
│   └── dateHelper.ts
├── mocks/                         # MSW 모킹
│   ├── handlers/
│   │   ├── auth.ts
│   │   ├── profile.ts
│   │   └── matching.ts
│   └── browser.ts
└── assets/                        # 정적 리소스
    ├── images/
    ├── icons/
    └── badges/
```

---

## 화면 구성 (Navigation)

### 하단 네비게이션 바 (Bottom Tab)
```
┌─────────────────────────────────────────┐
│                                         │
│          [메인 콘텐츠 영역]              │
│                                         │
├─────────────────────────────────────────┤
│  [홈]  [커뮤니티]  [알림]  [마이페이지]  │
└─────────────────────────────────────────┘
```

1. **홈** (메인)
   - 오늘의 카드 (Today's Match)
   - 받은 호감/매칭/소개팅 요약
   - 카드 히스토리

2. **커뮤니티**
   - 자유 게시판
   - 번개 게시판

3. **알림**
   - 알림 목록
   - 읽음/안읽음 관리

4. **마이페이지**
   - 내 프로필
   - 포인트 충전/내역
   - 배찌 관리
   - 설정

---

## 개발 가이드

### 시작하기

```bash
# 1. 저장소 클론
git clone https://github.com/your-org/dolsing-dating-app.git
cd dolsing-dating-app

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env
# .env 파일에 필요한 값 입력 (API URL, 결제 키 등)

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:5173 접속

### 주요 명령어

```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
npm run test         # 테스트 실행
npm run test:watch   # 테스트 워치 모드
npm run type-check   # TypeScript 타입 검사
npm run lint         # ESLint 검사
npm run format       # Prettier 포맷팅
```

### 환경 변수

```env
VITE_API_BASE_URL=https://api.dolsing-connect.com
VITE_PAYMENT_CLIENT_KEY=your_payment_key
VITE_KAKAO_APP_KEY=your_kakao_key
VITE_NAVER_CLIENT_ID=your_naver_id
VITE_GOOGLE_CLIENT_ID=your_google_id
VITE_FCM_VAPID_KEY=your_fcm_key
```

---

## 문서

- [개발 규칙](./CLAUDE.md)
- [정보구조도](./docs/INFORMATION_ARCHITECTURE.md)
- [화면명세서](./docs/SCREEN_SPECIFICATIONS.md)
- [API명세서](./docs/API_SPECIFICATION.md)
- [디자인시스템](./docs/DESIGN_SYSTEM.md)
- [포인트시스템](./docs/POINT_SYSTEM.md)
- [배찌시스템](./docs/BADGE_SYSTEM.md)
- [사용자플로우](./docs/USER_FLOW.md)

---

## 프로젝트 진행률

### Phase 1: 기획 및 설계 (진행 중)
- [x] 프로젝트 기획서 작성
- [x] 화면 설계 (IA)
- [x] API 명세 작성
- [ ] 디자인 시스템 정의
- [ ] DB 스키마 설계

### Phase 2: 인증 및 회원가입 (예정)
- [ ] 로그인/회원가입 UI
- [ ] SNS 간편 가입
- [ ] 프로필 등록
- [ ] 본인 인증
- [ ] 배찌 신청

### Phase 3: 매칭 시스템 (예정)
- [ ] 일일 카드 발행 시스템
- [ ] 프로필 상세 페이지
- [ ] 호감/매칭/소개팅 신청
- [ ] 메시지 시스템
- [ ] 번호 공개 시스템

### Phase 4: 커뮤니티 (예정)
- [ ] 자유 게시판
- [ ] 번개 게시판
- [ ] 게시글 작성/수정/삭제
- [ ] 댓글 기능

### Phase 5: 포인트 및 결제 (예정)
- [ ] 포인트 충전 UI
- [ ] 결제 연동
- [ ] 포인트 사용 내역
- [ ] 환불 처리

### Phase 6: 관리자 (예정)
- [ ] 어드민 대시보드
- [ ] 배찌 승인 관리
- [ ] 포인트 설정 관리
- [ ] 사용자 관리
- [ ] 통계 대시보드

### Phase 7: 앱 패키징 및 배포 (예정)
- [ ] Capacitor 설정
- [ ] iOS 빌드
- [ ] Android 빌드
- [ ] 앱스토어 등록
- [ ] 플레이스토어 등록

---

## 라이선스

Proprietary - All rights reserved

---

## 연락처

- **프로젝트 관리자**: [이름]
- **이메일**: contact@dolsing-connect.com
- **고객센터**: 1588-XXXX

---

**재연(再緣)** - 새로운 인연을 위한 신뢰의 시작
