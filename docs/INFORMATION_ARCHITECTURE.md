# 재연(再緣) 정보구조도 (Information Architecture)

**문서 버전**: 1.0
**최종 수정일**: 2025-01-XX
**작성자**: Development Team

---

## 개요

이 문서는 재연(再緣) 앱의 전체 화면 구조, 네비게이션 경로, 라우팅을 정의합니다.

---

## 앱 네비게이션 구조

### 하단 네비게이션 바 (Bottom Tab Navigation)

```
┌────────────────────────────────────────┐
│                                        │
│         [Main Content Area]            │
│                                        │
├────────────────────────────────────────┤
│  [홈]  [커뮤니티]  [알림]  [마이페이지]  │
└────────────────────────────────────────┘
```

**4개 메인 탭**:
1. 홈 - 오늘의 매칭 카드 및 활동 현황
2. 커뮤니티 - 자유게시판/번개게시판
3. 알림 - 푸시 알림 센터
4. 마이페이지 - 프로필, 설정, 포인트

---

## 전체 사이트맵

```
재연(再緣) 앱
│
├── 🔐 인증 & 온보딩 (Authentication & Onboarding)
│   ├── 스플래시 화면 (/splash) - SplashScreen
│   ├── 온보딩 소개 (/onboarding) - OnboardingScreen
│   ├── 로그인 (/login) - LoginScreen
│   ├── 회원가입 (/signup)
│   │   ├── 가입 방식 선택 (/) - SignupMethodScreen
│   │   ├── 이메일 회원가입 (/email) - EmailSignupScreen
│   │   ├── SNS 회원가입 콜백 (/callback/:provider) - SocialCallbackScreen
│   │   ├── 프로필 기본정보 (/profile-basic) - ProfileBasicScreen
│   │   ├── 프로필 사진 등록 (/profile-photos) - ProfilePhotosScreen
│   │   ├── 프로필 상세정보 (/profile-details) - ProfileDetailsScreen
│   │   ├── 본인인증 (/verification) - PhoneVerificationScreen
│   │   └── 가입 완료 (/complete) - SignupCompleteScreen
│   └── 비밀번호 찾기 (/forgot-password) - ForgotPasswordScreen
│
├── 🏠 홈 (Home) - /home
│   ├── 메인 홈 (/) - HomeScreen
│   │   ├── 오늘의 카드 섹션
│   │   ├── 받은 액션 요약 (호감/매칭/소개팅)
│   │   ├── 포인트 잔액 표시
│   │   └── 빠른 액션 버튼
│   │
│   ├── 오늘의 카드 상세 (/today-cards) - TodayCardsScreen
│   │   ├── 오전 카드 (9시 발행)
│   │   ├── 오후 카드 (18시 발행)
│   │   └── 발행 대기 안내
│   │
│   ├── 카드 히스토리 (/card-history) - CardHistoryScreen
│   │   ├── 전체 조회한 카드 목록 (최근 10일)
│   │   └── 필터:
│   │       - 전체
│   │       - 호감 보낸
│   │       - 호감 받은
│   │       - 매칭 신청
│   │       - 매칭 받은
│   │       - 소개팅 신청
│   │       - 소개팅 받은
│   │       - 메시지 보낸
│   │       - 메시지 받은
│   │       - 번호 확인
│   │
│   └── 프로필 상세 (/profile/:userId) - ProfileDetailScreen
│       ├── 프로필 미리보기 (무료)
│       │   ├── 사진 1장 (블러 처리)
│       │   ├── 기본 정보 (나이, 지역, 이혼횟수, 자녀)
│       │   └── 배찌 표시
│       │
│       ├── 프로필 상세보기 (프로필 오픈 100P)
│       │   ├── 사진 1장 (선명)
│       │   ├── 자기소개
│       │   ├── 상세 정보
│       │   └── 배찌 상세
│       │
│       ├── 전체 사진 보기 모달 (프로필 오픈 후)
│       │   └── 등록된 모든 사진 (최대 10장)
│       │
│       └── 액션 버튼
│           ├── 호감 보내기 (200P)
│           ├── 매칭 신청 (300P)
│           ├── 소개팅 신청 (500P)
│           └── 메시지 보내기 (500P)
│
├── 💬 커뮤니티 (Community) - /community
│   ├── 커뮤니티 메인 (/) - CommunityScreen
│   │   ├── 탭 선택
│   │   │   ├── 자유 게시판
│   │   │   └── 번개 게시판
│   │   └── 게시글 목록
│   │
│   ├── 자유 게시판 (/free-board) - FreeBoardScreen
│   │   ├── 게시글 목록
│   │   ├── 검색 (키워드)
│   │   ├── 정렬 (최신순, 인기순)
│   │   └── 작성 버튼
│   │
│   ├── 번개 게시판 (/meetup-board) - MeetupBoardScreen
│   │   ├── 게시글 목록
│   │   ├── 필터
│   │   │   ├── 주제 (와인/소주/맥주/커피/드라이브/산책/저녁/점심)
│   │   │   ├── 지역
│   │   │   └── 성별
│   │   ├── 검색 (키워드)
│   │   └── 작성 버튼
│   │
│   ├── 게시글 작성 (/post/create) - PostCreateScreen
│   │   ├── 게시판 선택 (자유/번개)
│   │   ├── 제목 입력
│   │   ├── 내용 입력
│   │   ├── 사진 첨부 (선택)
│   │   ├── 주제 선택 (번개 게시판인 경우)
│   │   └── 작성 완료
│   │
│   ├── 게시글 상세 (/post/:postId) - PostDetailScreen
│   │   ├── 게시글 내용
│   │   ├── 작성자 정보
│   │   │   ├── 닉네임 (마스킹)
│   │   │   ├── 지역
│   │   │   └── 작성일시
│   │   ├── 작성자 프로필 보기 버튼 (200P)
│   │   ├── 댓글 목록
│   │   ├── 댓글 작성
│   │   ├── 좋아요
│   │   └── 신고/차단 (더보기 메뉴)
│   │
│   └── 게시글 수정 (/post/:postId/edit) - PostEditScreen
│       └── 작성 화면과 동일 (기존 내용 불러오기)
│
├── 🔔 알림 (Notifications) - /notifications
│   ├── 알림 목록 (/) - NotificationsScreen
│   │   ├── 전체 알림
│   │   ├── 읽음/안읽음 필터
│   │   └── 알림 타입별 필터
│   │       ├── 호감 알림
│   │       ├── 매칭 알림
│   │       ├── 소개팅 알림
│   │       ├── 메시지 알림
│   │       ├── 번호 확인 알림
│   │       ├── 카드 발행 알림
│   │       └── 시스템 공지
│   │
│   └── 알림 상세 (/notifications/:notificationId) - NotificationDetailScreen
│       └── 해당 화면으로 이동 (프로필, 메시지 등)
│
├── 👤 마이페이지 (My Page) - /my
│   ├── 마이페이지 메인 (/) - MyPageScreen
│   │   ├── 내 프로필 요약
│   │   │   ├── 프로필 사진
│   │   │   ├── 기본 정보
│   │   │   └── 배찌 표시
│   │   ├── 포인트 잔액
│   │   ├── 메뉴
│   │   │   ├── 내 프로필 관리
│   │   │   ├── 배찌 관리
│   │   │   ├── 포인트 충전
│   │   │   ├── 포인트 사용 내역
│   │   │   ├── 받은 액션 관리
│   │   │   ├── 보낸 액션 관리
│   │   │   ├── 알림 설정
│   │   │   ├── 계정 설정
│   │   │   ├── 고객센터
│   │   │   └── 로그아웃
│   │
│   ├── 내 프로필 관리 (/profile) - MyProfileScreen
│   │   ├── 프로필 미리보기 (다른 사람이 보는 화면)
│   │   └── 수정하기 버튼 → ProfileEditScreen
│   │
│   ├── 프로필 수정 (/profile/edit) - ProfileEditScreen
│   │   ├── 사진 관리
│   │   │   ├── 사진 추가/삭제
│   │   │   ├── 대표 사진 설정
│   │   │   └── 순서 변경
│   │   ├── 기본 정보 수정
│   │   │   ├── 이혼 횟수
│   │   │   ├── 자녀 유무/수
│   │   │   ├── 지역
│   │   │   └── 생년월일 (변경 불가)
│   │   ├── 상세 정보 수정
│   │   │   ├── 자기소개
│   │   │   ├── 직업
│   │   │   ├── 키/체형
│   │   │   ├── 학력
│   │   │   ├── 흡연/음주
│   │   │   └── 종교
│   │   └── 저장
│   │
│   ├── 배찌 관리 (/badges) - BadgesScreen
│   │   ├── 보유 배찌 목록
│   │   ├── 신청 가능한 배찌 목록
│   │   └── 신청 중인 배찌 (대기/승인/거부)
│   │
│   ├── 배찌 신청 (/badges/apply/:badgeType) - BadgeApplicationScreen
│   │   ├── 배찌 설명
│   │   ├── 필요 서류 안내 (관리자 설정)
│   │   ├── 서류 업로드
│   │   └── 신청하기
│   │
│   ├── 포인트 충전 (/points/charge) - PointChargeScreen
│   │   ├── 현재 포인트 잔액
│   │   ├── 충전 패키지
│   │   │   ├── 1만원 (1,000P)
│   │   │   ├── 3만원 (3,000P)
│   │   │   ├── 5만원 (5,000P + 보너스)
│   │   │   ├── 10만원 (10,000P + 보너스)
│   │   │   └── 이벤트 패키지 (관리자 설정)
│   │   ├── 결제 수단 선택
│   │   │   ├── 카드
│   │   │   ├── 카카오페이
│   │   │   └── 토스페이
│   │   └── 결제하기
│   │
│   ├── 결제 진행 (/points/payment/:orderId) - PaymentProcessScreen
│   │   └── PG사 결제 페이지 임베드
│   │
│   ├── 결제 완료 (/points/payment/success) - PaymentSuccessScreen
│   │   ├── 충전 완료 안내
│   │   ├── 충전된 포인트
│   │   └── 확인 버튼
│   │
│   ├── 결제 실패 (/points/payment/fail) - PaymentFailScreen
│   │   ├── 실패 사유
│   │   └── 재시도/취소 버튼
│   │
│   ├── 포인트 내역 (/points/history) - PointHistoryScreen
│   │   ├── 필터 (전체/충전/사용/환불)
│   │   ├── 날짜 선택
│   │   └── 내역 목록
│   │       ├── 일시
│   │       ├── 내용
│   │       ├── 포인트 (+ 또는 -)
│   │       └── 잔액
│   │
│   ├── 받은 액션 관리 (/actions/received) - ReceivedActionsScreen
│   │   ├── 탭 선택
│   │   │   ├── 호감
│   │   │   ├── 매칭 신청
│   │   │   ├── 소개팅 신청
│   │   │   └── 메시지
│   │   ├── 액션별 목록
│   │   │   ├── 발신자 프로필 미리보기
│   │   │   ├── 받은 시간
│   │   │   └── 상태 (대기/승인/거부)
│   │   └── 액션 (승인/거부/프로필 보기)
│   │
│   ├── 보낸 액션 관리 (/actions/sent) - SentActionsScreen
│   │   ├── 탭 선택 (호감/매칭/소개팅/메시지)
│   │   ├── 액션별 목록
│   │   │   ├── 수신자 프로필 미리보기
│   │   │   ├── 보낸 시간
│   │   │   └── 상태 (대기/승인/거부)
│   │   └── 프로필 보기
│   │
│   ├── 메시지 (/messages) - MessagesScreen
│   │   ├── 메시지 목록 (보낸/받은)
│   │   └── 메시지 상세
│   │       ├── 발신자/수신자 정보
│   │       ├── 메시지 내용
│   │       └── 보낸 시간
│   │
│   ├── 번호 확인 내역 (/phone-views) - PhoneViewHistoryScreen
│   │   ├── 내가 확인한 번호 목록
│   │   └── 나를 확인한 사람 목록
│   │
│   ├── 설정 (/settings) - SettingsScreen
│   │   ├── 알림 설정
│   │   ├── 계정 설정
│   │   ├── 개인정보 설정
│   │   ├── 차단 관리
│   │   ├── 약관 및 정책
│   │   ├── 버전 정보
│   │   └── 탈퇴하기
│   │
│   ├── 알림 설정 (/settings/notifications) - NotificationSettingsScreen
│   │   ├── 푸시 알림 ON/OFF
│   │   ├── 알림 타입별 설정
│   │   │   ├── 호감 알림
│   │   │   ├── 매칭 알림
│   │   │   ├── 소개팅 알림
│   │   │   ├── 메시지 알림
│   │   │   ├── 번호 확인 알림
│   │   │   ├── 카드 발행 알림 (오전 9시, 오후 6시)
│   │   │   └── 시스템 공지
│   │   └── 방해금지 시간 설정
│   │
│   ├── 계정 설정 (/settings/account) - AccountSettingsScreen
│   │   ├── 이메일 변경
│   │   ├── 비밀번호 변경
│   │   ├── 휴대폰 번호 변경 (재인증 필요)
│   │   └── 연결된 SNS 계정 관리
│   │
│   ├── 개인정보 설정 (/settings/privacy) - PrivacySettingsScreen
│   │   ├── 프로필 공개 범위
│   │   ├── 위치 정보 공개 범위
│   │   └── 검색 허용 여부
│   │
│   ├── 차단 관리 (/settings/blocked) - BlockedUsersScreen
│   │   ├── 차단한 사용자 목록
│   │   └── 차단 해제
│   │
│   ├── 약관 및 정책 (/settings/terms) - TermsScreen
│   │   ├── 이용약관
│   │   ├── 개인정보처리방침
│   │   └── 위치기반서비스 이용약관
│   │
│   └── 탈퇴하기 (/settings/withdraw) - WithdrawScreen
│       ├── 탈퇴 사유 선택
│       ├── 주의사항 안내
│       │   ├── 잔여 포인트 환불 불가
│       │   ├── 프로필 정보 삭제
│       │   └── 30일 후 재가입 가능
│       └── 탈퇴 확인
│
├── 📞 고객센터 (Customer Support) - /support
│   ├── 고객센터 메인 (/) - SupportScreen
│   │   ├── FAQ
│   │   ├── 공지사항
│   │   ├── 1:1 문의
│   │   └── 전화 상담 안내
│   │
│   ├── FAQ (/faq) - FAQScreen
│   │   ├── 카테고리별 FAQ
│   │   │   ├── 회원가입/로그인
│   │   │   ├── 프로필 관리
│   │   │   ├── 매칭 시스템
│   │   │   ├── 포인트/결제
│   │   │   ├── 배찌 인증
│   │   │   └── 기타
│   │   └── 검색
│   │
│   ├── 공지사항 (/notices) - NoticesScreen
│   │   ├── 공지사항 목록
│   │   └── 공지사항 상세 (/notices/:noticeId) - NoticeDetailScreen
│   │
│   ├── 1:1 문의 (/inquiries) - InquiriesScreen
│   │   ├── 문의 내역 목록
│   │   └── 문의하기 버튼
│   │
│   └── 문의 작성 (/inquiries/create) - InquiryCreateScreen
│       ├── 문의 유형 선택
│       ├── 제목 입력
│       ├── 내용 입력
│       ├── 스크린샷 첨부 (선택)
│       └── 제출
│
└── 🔧 관리자 (Admin) - /admin
    ├── 관리자 로그인 (/login) - AdminLoginScreen
    │
    ├── 대시보드 (/) - AdminDashboardScreen
    │   ├── 통계 요약
    │   │   ├── 일일 활성 사용자 (DAU)
    │   │   ├── 신규 가입자
    │   │   ├── 매칭 성공 건수
    │   │   ├── 포인트 충전 금액
    │   │   └── 배찌 신청 대기 건수
    │   └── 빠른 링크
    │       ├── 배찌 승인 대기
    │       ├── 신고 처리 대기
    │       └── 문의 답변 대기
    │
    ├── 회원 관리 (/users) - AdminUsersScreen
    │   ├── 회원 목록
    │   ├── 검색/필터
    │   ├── 회원 상세 (/users/:userId) - AdminUserDetailScreen
    │   │   ├── 회원 정보
    │   │   ├── 활동 내역
    │   │   ├── 포인트 내역
    │   │   └── 관리 액션 (이용정지, 탈퇴 처리)
    │   └── 이용정지 관리 (/users/suspended) - SuspendedUsersScreen
    │
    ├── 배찌 관리 (/badges) - AdminBadgesScreen
    │   ├── 배찌 신청 목록
    │   │   ├── 대기 중
    │   │   ├── 승인됨
    │   │   └── 거부됨
    │   ├── 배찌 신청 상세 (/badges/:applicationId) - BadgeApplicationDetailScreen
    │   │   ├── 신청자 정보
    │   │   ├── 배찌 종류
    │   │   ├── 제출 서류 확인
    │   │   └── 승인/거부 (관리자 메모)
    │   └── 배찌 설정 (/badges/settings) - BadgeSettingsScreen
    │       └── 배찌 종류별 요구 서류 텍스트 편집
    │
    ├── 포인트 관리 (/points) - AdminPointsScreen
    │   ├── 포인트 비용 설정 (/points/prices) - PointPricesScreen
    │   │   ├── 프로필 오픈: 100P (수정 가능)
    │   │   ├── 호감 보내기: 200P
    │   │   ├── 매칭 신청: 300P
    │   │   ├── 소개팅 신청: 500P
    │   │   ├── 메시지 보내기: 500P
    │   │   └── 번호 확인: 500P
    │   ├── 충전 패키지 관리 (/points/packages) - PointPackagesScreen
    │   │   ├── 기본 패키지 (1만/3만/5만/10만원)
    │   │   └── 이벤트 패키지 추가/수정/삭제
    │   └── 충전 내역 (/points/charges) - AdminChargeHistoryScreen
    │
    ├── 신고 관리 (/reports) - AdminReportsScreen
    │   ├── 신고 목록
    │   │   ├── 대기 중
    │   │   ├── 처리 중
    │   │   └── 처리 완료
    │   └── 신고 상세 (/reports/:reportId) - ReportDetailScreen
    │       ├── 신고 내용
    │       ├── 신고 대상 확인
    │       └── 처리 (경고, 이용정지, 탈퇴)
    │
    ├── 게시글 관리 (/posts) - AdminPostsScreen
    │   ├── 게시글 목록 (전체/자유/번개)
    │   ├── 검색/필터
    │   └── 게시글 삭제
    │
    ├── 공지사항 관리 (/notices) - AdminNoticesScreen
    │   ├── 공지사항 목록
    │   ├── 공지사항 작성 (/notices/create) - NoticeCreateScreen
    │   └── 공지사항 수정 (/notices/:noticeId/edit) - NoticeEditScreen
    │
    ├── FAQ 관리 (/faq) - AdminFAQScreen
    │   ├── FAQ 목록
    │   ├── FAQ 작성 (/faq/create) - FAQCreateScreen
    │   └── FAQ 수정 (/faq/:faqId/edit) - FAQEditScreen
    │
    ├── 문의 관리 (/inquiries) - AdminInquiriesScreen
    │   ├── 문의 목록
    │   │   ├── 답변 대기
    │   │   └── 답변 완료
    │   └── 문의 상세 (/inquiries/:inquiryId) - AdminInquiryDetailScreen
    │       ├── 문의 내용
    │       └── 답변 작성
    │
    └── 통계 (/statistics) - AdminStatisticsScreen
        ├── 사용자 통계
        │   ├── DAU/MAU
        │   ├── 가입자 추이
        │   └── 연령/지역별 분포
        ├── 매칭 통계
        │   ├── 일일 카드 발행 수
        │   ├── 호감/매칭/소개팅 건수
        │   └── 매칭 성공률
        ├── 포인트 통계
        │   ├── 충전 금액 추이
        │   ├── 사용 패턴 분석
        │   └── ARPU
        └── 배찌 통계
            └── 배찌별 사용자 수
```

---

## 라우팅 구조 (React Router)

```typescript
// AppRouter.tsx 구조 예시

const router = createBrowserRouter([
  // 인증 및 온보딩
  {
    path: '/splash',
    element: <SplashScreen />,
  },
  {
    path: '/onboarding',
    element: <OnboardingScreen />,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/signup',
    element: <SignupLayout />,
    children: [
      { index: true, element: <SignupMethodScreen /> },
      { path: 'email', element: <EmailSignupScreen /> },
      { path: 'callback/:provider', element: <SocialCallbackScreen /> },
      { path: 'profile-basic', element: <ProfileBasicScreen /> },
      { path: 'profile-photos', element: <ProfilePhotosScreen /> },
      { path: 'profile-details', element: <ProfileDetailsScreen /> },
      { path: 'verification', element: <PhoneVerificationScreen /> },
      { path: 'complete', element: <SignupCompleteScreen /> },
    ],
  },

  // 메인 앱 (인증 필요)
  {
    path: '/',
    element: <AppLayout />, // 하단 네비게이션 포함
    children: [
      // 홈
      {
        path: 'home',
        children: [
          { index: true, element: <HomeScreen /> },
          { path: 'today-cards', element: <TodayCardsScreen /> },
          { path: 'card-history', element: <CardHistoryScreen /> },
          { path: 'profile/:userId', element: <ProfileDetailScreen /> },
        ],
      },

      // 커뮤니티
      {
        path: 'community',
        children: [
          { index: true, element: <CommunityScreen /> },
          { path: 'free-board', element: <FreeBoardScreen /> },
          { path: 'meetup-board', element: <MeetupBoardScreen /> },
          { path: 'post/create', element: <PostCreateScreen /> },
          { path: 'post/:postId', element: <PostDetailScreen /> },
          { path: 'post/:postId/edit', element: <PostEditScreen /> },
        ],
      },

      // 알림
      {
        path: 'notifications',
        children: [
          { index: true, element: <NotificationsScreen /> },
          { path: ':notificationId', element: <NotificationDetailScreen /> },
        ],
      },

      // 마이페이지
      {
        path: 'my',
        children: [
          { index: true, element: <MyPageScreen /> },
          { path: 'profile', element: <MyProfileScreen /> },
          { path: 'profile/edit', element: <ProfileEditScreen /> },
          { path: 'badges', element: <BadgesScreen /> },
          { path: 'badges/apply/:badgeType', element: <BadgeApplicationScreen /> },
          {
            path: 'points',
            children: [
              { path: 'charge', element: <PointChargeScreen /> },
              { path: 'payment/:orderId', element: <PaymentProcessScreen /> },
              { path: 'payment/success', element: <PaymentSuccessScreen /> },
              { path: 'payment/fail', element: <PaymentFailScreen /> },
              { path: 'history', element: <PointHistoryScreen /> },
            ],
          },
          { path: 'actions/received', element: <ReceivedActionsScreen /> },
          { path: 'actions/sent', element: <SentActionsScreen /> },
          { path: 'messages', element: <MessagesScreen /> },
          { path: 'phone-views', element: <PhoneViewHistoryScreen /> },
          {
            path: 'settings',
            children: [
              { index: true, element: <SettingsScreen /> },
              { path: 'notifications', element: <NotificationSettingsScreen /> },
              { path: 'account', element: <AccountSettingsScreen /> },
              { path: 'privacy', element: <PrivacySettingsScreen /> },
              { path: 'blocked', element: <BlockedUsersScreen /> },
              { path: 'terms', element: <TermsScreen /> },
              { path: 'withdraw', element: <WithdrawScreen /> },
            ],
          },
        ],
      },

      // 고객센터
      {
        path: 'support',
        children: [
          { index: true, element: <SupportScreen /> },
          { path: 'faq', element: <FAQScreen /> },
          { path: 'notices', element: <NoticesScreen /> },
          { path: 'notices/:noticeId', element: <NoticeDetailScreen /> },
          { path: 'inquiries', element: <InquiriesScreen /> },
          { path: 'inquiries/create', element: <InquiryCreateScreen /> },
        ],
      },
    ],
  },

  // 관리자 (별도 레이아웃)
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'login', element: <AdminLoginScreen /> },
      { index: true, element: <AdminDashboardScreen /> },
      { path: 'users', element: <AdminUsersScreen /> },
      { path: 'users/:userId', element: <AdminUserDetailScreen /> },
      // ... 생략
    ],
  },
]);
```

---

## 네비게이션 플로우

### 1. 첫 방문 사용자 플로우
```
SplashScreen
  → OnboardingScreen (앱 소개 슬라이드 3-4개)
  → LoginScreen / SignupMethodScreen
```

### 2. 회원가입 플로우
```
SignupMethodScreen (이메일/카카오/네이버/구글)
  → EmailSignupScreen (이메일 선택 시)
  → ProfileBasicScreen (이혼횟수, 자녀, 지역, 생년월일)
  → ProfilePhotosScreen (사진 3-10장 등록)
  → ProfileDetailsScreen (자기소개, 직업, 학력 등)
  → PhoneVerificationScreen (본인인증)
  → SignupCompleteScreen (가입 완료)
  → HomeScreen (자동 로그인)
```

### 3. 프로필 조회 및 매칭 플로우
```
HomeScreen
  → TodayCardsScreen (오늘의 카드 확인)
  → ProfileDetailScreen (프로필 미리보기)
  → [프로필 오픈 100P] (프로필 상세보기)
  → [액션 선택]
    ├─ 호감 보내기 (200P)
    ├─ 매칭 신청 (300P) → [상대 승인 대기] → [번호 확인 500P]
    ├─ 소개팅 신청 (500P) → [상대 승인 대기] → [번호 확인 500P]
    └─ 메시지 보내기 (500P)
```

### 4. 배찌 신청 플로우
```
MyPageScreen
  → BadgesScreen (배찌 관리)
  → BadgeApplicationScreen (배찌 신청)
  → [서류 업로드]
  → [신청 완료]
  → [관리자 승인 대기]
  → [승인 시 배찌 부여]
```

### 5. 포인트 충전 플로우
```
MyPageScreen
  → PointChargeScreen (충전 금액 선택)
  → [결제 수단 선택]
  → PaymentProcessScreen (PG사 결제)
  → PaymentSuccessScreen (충전 완료)
  or PaymentFailScreen (실패 시 재시도)
```

---

## 특별한 네비게이션 규칙

### 1. 딥링크 처리
- 푸시 알림 클릭 시 해당 화면으로 직접 이동
- 예: 호감 받음 알림 → `/home/profile/:userId`
- 예: 메시지 받음 → `/my/messages`

### 2. 뒤로가기 동작
- 하단 네비게이션 탭 전환 시: 각 탭의 첫 화면으로 스택 리셋
- 프로필 상세 → 뒤로가기 → 이전 화면 (카드 리스트 또는 홈)
- 결제 중 뒤로가기: 결제 취소 확인 모달

### 3. 인증 가드
- 로그인하지 않은 사용자: `/login`으로 리다이렉트
- 프로필 미완성 사용자: 프로필 등록 화면으로 리다이렉트
- 관리자 페이지: 관리자 권한 체크

### 4. 모달/바텀시트
- 전체 화면이 아닌 모달로 표시되는 경우:
  - 프로필 오픈 확인 (100P 차감 확인)
  - 액션 확인 (호감/매칭/소개팅/메시지 전송 확인)
  - 번호 확인 (500P 차감 후 전화번호 표시)
  - 사진 전체보기
  - 필터 선택 (게시판, 카드 히스토리)

---

## 화면 총 개수

| 카테고리 | 화면 수 |
|---------|--------|
| 인증 & 온보딩 | 10개 |
| 홈 & 프로필 | 4개 |
| 커뮤니티 | 5개 |
| 알림 | 2개 |
| 마이페이지 | 19개 |
| 고객센터 | 6개 |
| 관리자 | 15개+ |
| **총 화면** | **약 61개** |

---

**참고**: 이 구조는 개발 진행에 따라 변경될 수 있습니다. 화면 추가/수정 시 이 문서를 반드시 업데이트해야 합니다.
