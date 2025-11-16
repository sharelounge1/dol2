# CLAUDE.md - 재연(再緣) 프로젝트 개발 규칙 및 산출물 생성 가이드

> 돌싱(이혼남녀)을 위한 프리미엄 소개팅 앱 개발 가이드

---

# Part 1: 프로젝트 규칙

## 프로젝트 개요
- **프로젝트명**: 재연(再緣) - Dolsing Dating App
- **목적**: 30~50대 이혼 경험자들을 위한 신뢰 기반 소개팅 플랫폼
- **기술스택**: React + TypeScript, Vite, TailwindCSS, Zustand, React Query
- **배포 환경**: 모바일 웹 → 앱 패키징 (Capacitor/Cordova)
- **포트**: 5173 (개발), 3000 (프로덕션)

## 핵심 개발 철학

### 1. 신뢰와 안전 우선 원칙
- **신뢰성**: 모든 사용자 정보는 검증 가능해야 하며, 배찌 시스템을 통한 신원 인증 강화
- **안전성**: 개인정보 보호 최우선, 민감 정보(전화번호 등)는 포인트 시스템으로 단계적 공개
- **사용성**: 30~50대 타겟층을 고려한 직관적이고 명확한 UI/UX
- **품질**: 결제/포인트 시스템의 정확성과 안정성 보장

### 2. FE/BE 책임 범위
```
✅ FE 담당:
- 모든 UI/UX 컴포넌트 및 화면 구성
- 클라이언트 사이드 유효성 검사
- 포인트 잔액 표시 및 UI 상태 관리
- 이미지 업로드 전 프리뷰 및 압축
- 로컬 캐싱 및 오프라인 대응
- 푸시 알림 수신 및 표시

❌ BE 담당 (FE에서 구현 금지):
- 포인트 차감/충전 로직 (FE는 표시만)
- 배찌 승인/거부 로직
- 매칭 알고리즘 (지역/나이 기반)
- 전화번호 공개 권한 검증
- 결제 처리 및 검증
- 카드 발행 스케줄링 (오전 9시, 오후 6시)
- 데이터 암호화 및 보안 처리
```

## 기술 스택 & 구조

### 필수 기술 스택
```
Runtime: React 18 + TypeScript 5+
Build Tool: Vite 5+
State Management: Zustand (전역 상태), React Query (서버 상태)
Styling: TailwindCSS + Headless UI
Router: React Router v6
Storage: LocalStorage (토큰), IndexedDB (오프라인 캐시)
Forms: React Hook Form + Zod
Image: React Image Crop, Compressor.js
Payment: 토스페이먼츠 / 카카오페이 SDK
Push: Firebase Cloud Messaging (FCM)
```

### 프로젝트 구조
```
src/
├── components/
│   ├── ui/                    # Headless UI 기반 재사용 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   ├── common/                # 공통 컴포넌트
│   │   ├── Navigation.tsx
│   │   ├── Header.tsx
│   │   ├── BottomNav.tsx
│   │   └── ProfileCard.tsx
│   ├── screens/               # 화면 컴포넌트
│   │   ├── auth/
│   │   ├── home/
│   │   ├── profile/
│   │   ├── community/
│   │   ├── points/
│   │   └── settings/
│   └── layout/                # 레이아웃 컴포넌트
│       ├── AppLayout.tsx
│       └── AuthLayout.tsx
├── stores/                    # Zustand 스토어
│   ├── authStore.ts
│   ├── profileStore.ts
│   ├── pointsStore.ts
│   └── notificationStore.ts
├── hooks/                     # 커스텀 훅
│   ├── useAuth.ts
│   ├── usePoints.ts
│   ├── useProfileCard.ts
│   └── usePushNotification.ts
├── services/                  # API 서비스
│   ├── api/
│   │   ├── auth.ts
│   │   ├── profile.ts
│   │   ├── matching.ts
│   │   ├── community.ts
│   │   └── payment.ts
│   └── apiClient.ts
├── types/                     # TypeScript 타입 정의
│   ├── auth.types.ts
│   ├── profile.types.ts
│   ├── matching.types.ts
│   └── api.types.ts
├── utils/                     # 유틸리티 함수
│   ├── formatters.ts
│   ├── validators.ts
│   └── imageHelper.ts
├── mocks/                     # MSW 목 데이터
│   ├── handlers/
│   └── browser.ts
└── assets/                    # 정적 리소스
    ├── images/
    ├── icons/
    └── badges/
```

## 코딩 컨벤션

### 1. 명명 규칙
```typescript
// 컴포넌트: PascalCase
const LoginScreen = () => { };
const ProfileCard = () => { };

// 변수/함수: camelCase
const userName = 'john';
const handleProfileClick = () => { };

// 이벤트 핸들러: on[Action] 형태
const onLogin = () => { };
const onSendLike = () => { };
const onRequestMatching = () => { };

// 상수: SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.dolsing-connect.com';
const POINTS_PER_WON = 0.1; // 10원 = 1포인트
const DAILY_CARD_TIMES = ['09:00', '18:00'];

// 파일명:
// - 컴포넌트: PascalCase.tsx (LoginScreen.tsx, ProfileCard.tsx)
// - 훅: camelCase.ts (useAuth.ts, usePoints.ts)
// - 기타: camelCase.ts (apiClient.ts, formatters.ts)
```

### 2. 컴포넌트 작성 규칙
```typescript
// ✅ 반드시 이 구조 준수
import { useState, useEffect, useMemo, useCallback } from 'react';

interface ProfileCardProps {
  userId: string;
  onLike?: (userId: string) => void;
  onMatch?: (userId: string) => void;
}

export const ProfileCard = ({ userId, onLike, onMatch }: ProfileCardProps) => {
  // 1. State 변수들
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // 2. 커스텀 훅들
  const { data: profile, isLoading } = useProfile(userId);
  const { points, deductPoints } = usePoints();

  // 3. 계산된 값들 (useMemo)
  const canSendLike = useMemo(() => points >= 200, [points]);
  const displayAge = useMemo(() => {
    return new Date().getFullYear() - profile?.birthYear + 1;
  }, [profile?.birthYear]);

  // 4. 이벤트 핸들러들 (useCallback)
  const handleLike = useCallback(async () => {
    if (!canSendLike) return;
    await deductPoints(200);
    onLike?.(userId);
  }, [canSendLike, userId, onLike, deductPoints]);

  // 5. 사이드 이펙트들 (useEffect)
  useEffect(() => {
    // 프로필 조회 로그 전송
    logProfileView(userId);
  }, [userId]);

  // 6. 렌더링
  if (isLoading) return <ProfileCardSkeleton />;

  return (
    <div className="profile-card">
      {/* JSX */}
    </div>
  );
};
```

### 3. 스타일링 규칙
```typescript
// ✅ TailwindCSS + 프로젝트 전용 색상 정의
const colors = {
  // 메인 컬러 - 신뢰감 있는 블루/그린 계열
  'primary': '#4A7C99',        // 차분한 블루
  'primary-dark': '#2C5F7A',
  'primary-light': '#6B9BB8',

  // 악센트 컬러
  'accent': '#E8A87C',         // 따뜻한 베이지 골드
  'accent-dark': '#D4956A',

  // 상태 컬러
  'success': '#52A885',        // 성숙한 그린
  'warning': '#E6A23C',
  'error': '#D85F5F',
  'info': '#5F9FD8',

  // 중립 컬러
  'background': '#F8F9FA',
  'surface': '#FFFFFF',
  'border': '#E1E4E8',
  'text-primary': '#2C3E50',
  'text-secondary': '#6C757D',
  'text-disabled': '#ADB5BD',
};

// ✅ 배찌 컬러
const badgeColors = {
  'university': '#4169E1',      // 인서울 대학
  'enterprise': '#1E90FF',      // 대기업
  'income-5k': '#FFD700',       // 연봉 5천만원+
  'income-10k': '#FF8C00',      // 연봉 1억+
  'asset-1': '#32CD32',         // 자산 1억+
  'asset-3': '#228B22',         // 자산 3억+
  'asset-5': '#006400',         // 자산 5억+
};
```

## 프로젝트별 특화 규칙

### 1. 포인트 시스템 규칙
```typescript
// ✅ 모든 포인트 관련 액션은 BE API 호출 필수
// ❌ FE에서 포인트 계산/차감 절대 금지

// 포인트 비용 상수 (관리자가 변경 가능하므로 API에서 받아옴)
interface PointPrices {
  PROFILE_OPEN: number;       // 기본 100
  SEND_LIKE: number;          // 기본 200
  REQUEST_MATCH: number;      // 기본 300
  REQUEST_DATE: number;       // 기본 500
  SEND_MESSAGE: number;       // 기본 500
  VIEW_PHONE: number;         // 기본 500
}

// ✅ 포인트 차감 전 잔액 확인 필수
const handleAction = async (action: string, cost: number) => {
  if (currentPoints < cost) {
    showModal({
      type: 'error',
      title: '포인트가 부족합니다',
      message: `이 기능을 사용하려면 ${cost}P가 필요합니다.\n현재 포인트: ${currentPoints}P`,
      confirmText: '충전하기',
      onConfirm: () => navigate('/points/charge')
    });
    return;
  }

  try {
    await apiClient.post(`/actions/${action}`, { userId, cost });
    await refreshPoints(); // 포인트 갱신
  } catch (error) {
    handleError(error);
  }
};
```

### 2. 이미지 업로드 규칙
```typescript
// ✅ 프로필 사진은 최소 3장, 최대 10장
// ✅ 업로드 전 압축 및 리사이징 필수

const uploadProfileImages = async (files: File[]) => {
  if (files.length < 3) {
    throw new Error('프로필 사진은 최소 3장 이상 등록해야 합니다');
  }

  if (files.length > 10) {
    throw new Error('프로필 사진은 최대 10장까지 등록 가능합니다');
  }

  // 이미지 압축 (최대 1MB, 1200x1600)
  const compressedImages = await Promise.all(
    files.map(file => compressImage(file, {
      maxWidth: 1200,
      maxHeight: 1600,
      maxSizeMB: 1,
      quality: 0.85
    }))
  );

  // S3 업로드
  const uploadedUrls = await uploadToS3(compressedImages);
  return uploadedUrls;
};
```

### 3. 매칭 액션 규칙
```typescript
// ✅ 호감/매칭/소개팅 신청 상태 관리
type ActionStatus =
  | 'pending'      // 대기 중
  | 'sent'         // 보냄
  | 'received'     // 받음
  | 'matched'      // 양쪽 모두 수락
  | 'rejected'     // 거절됨
  | 'expired';     // 만료됨

// ✅ 액션별 프로세스 플로우
/*
1. 호감 보내기 (200P):
   - 상대에게 알림 발송
   - 상대가 프로필 조회 가능
   - 상대도 호감 보내면 "양쪽 호감" 상태

2. 매칭 신청 (300P):
   - 상대에게 알림 발송
   - 상대가 매칭 승인 (300P)
   - 양쪽 승인 시 "번호 확인" 버튼 활성화
   - 번호 확인 (500P) → 전화번호 공개

3. 소개팅 신청 (500P):
   - 상대에게 알림 발송
   - 상대가 소개팅 승인 (500P)
   - 양쪽 승인 시 "번호 확인" 버튼 활성화
   - 번호 확인 (500P) → 전화번호 공개
   - "바로 만나기로 동의한 사람" 표시

4. 메시지 보내기 (500P):
   - 일방향 메시지 전송
   - 상대는 무료로 확인 가능
   - 답장은 별도 500P
*/
```

### 4. 카드 리스트 관리 규칙
```typescript
// ✅ 조회한 카드는 10일간 보관 후 자동 삭제
interface ViewedCard {
  userId: string;
  viewedAt: Date;
  expiresAt: Date;        // viewedAt + 10일
  actions: {
    likedSent?: Date;
    likedReceived?: Date;
    matchSent?: Date;
    matchReceived?: Date;
    dateSent?: Date;
    dateReceived?: Date;
    messageSent?: Date;
    messageReceived?: Date;
    phoneViewed?: Date;
  };
}

// ✅ 필터링 옵션
type CardFilter =
  | 'all'                  // 전체
  | 'liked_sent'           // 호감 보낸
  | 'liked_received'       // 호감 받은
  | 'matched_sent'         // 매칭 신청
  | 'matched_received'     // 매칭 받은
  | 'date_sent'            // 소개팅 신청
  | 'date_received'        // 소개팅 받은
  | 'message_sent'         // 메시지 보낸
  | 'message_received'     // 메시지 받은
  | 'phone_viewed';        // 번호 확인
```

## API 통신 규칙

```typescript
// ✅ 타입 우선 정의
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

// ✅ 모듈별 API 서비스
export const profileApi = {
  getMyProfile: () =>
    apiClient.get<Profile>('/profile/me'),

  updateProfile: (data: UpdateProfileRequest) =>
    apiClient.put<Profile>('/profile', data),

  uploadPhotos: (photos: File[]) =>
    apiClient.post<string[]>('/profile/photos', photos, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }),
};

export const matchingApi = {
  getTodayCards: () =>
    apiClient.get<ProfileCard[]>('/matching/today'),

  sendLike: (targetUserId: string) =>
    apiClient.post<ActionResult>('/matching/like', { targetUserId }),

  requestMatch: (targetUserId: string) =>
    apiClient.post<ActionResult>('/matching/match', { targetUserId }),

  requestDate: (targetUserId: string) =>
    apiClient.post<ActionResult>('/matching/date', { targetUserId }),

  viewPhone: (targetUserId: string) =>
    apiClient.post<{ phone: string }>('/matching/phone', { targetUserId }),
};

export const pointsApi = {
  getBalance: () =>
    apiClient.get<{ points: number }>('/points/balance'),

  charge: (amount: number, paymentMethod: string) =>
    apiClient.post<ChargeResult>('/points/charge', { amount, paymentMethod }),

  getHistory: (params: { page: number; size: number }) =>
    apiClient.get<PointHistory[]>('/points/history', { params }),
};
```

## 테스트 & 품질 관리

```typescript
// ✅ 컴포넌트 테스트
describe('ProfileCard', () => {
  it('포인트가 부족할 때 호감 보내기 버튼이 비활성화되어야 함', () => {
    render(<ProfileCard userId="user123" />, {
      wrapper: ({ children }) => (
        <PointsProvider initialPoints={100}>
          {children}
        </PointsProvider>
      )
    });

    const likeButton = screen.getByText('호감 보내기');
    expect(likeButton).toBeDisabled();
  });

  it('호감 보내기 클릭 시 포인트가 차감되어야 함', async () => {
    const { user } = renderWithUser(<ProfileCard userId="user123" />);

    const likeButton = screen.getByText('호감 보내기');
    await user.click(likeButton);

    await waitFor(() => {
      expect(screen.getByText(/200P 차감/)).toBeInTheDocument();
    });
  });
});

// ✅ API 모킹
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/matching/today', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: [
          {
            userId: 'user001',
            name: '김**',
            age: 42,
            location: '서울 강남구',
            divorce: 1,
            children: 2,
            previewPhoto: 'https://example.com/photo1.jpg',
            badges: ['university', 'asset-1']
          }
        ]
      })
    );
  }),

  rest.post('/api/matching/like', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: {
          actionId: 'action123',
          pointsDeducted: 200,
          remainingPoints: 1800
        }
      })
    );
  }),
];
```

## 개발 명령어

```bash
npm run dev          # 개발 서버 (포트 5173)
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 프리뷰
npm run test         # 테스트 실행
npm run test:watch   # 테스트 워치 모드
npm run type-check   # TypeScript 타입 체크
npm run lint         # ESLint 검사
npm run format       # Prettier 포맷팅
```

## 주의사항

### ❌ 금지 사항
- **console.log 운영 코드 포함 금지** (개발 시에만 사용, 커밋 전 제거)
- **any 타입 사용 금지** (불가피한 경우 `unknown` 사용 후 타입 가드)
- **포인트 관련 계산 로직 FE 구현 금지** (반드시 BE API 호출)
- **전화번호 등 민감정보 로컬 저장 금지** (메모리에만 보관, 화면 이탈 시 삭제)
- **결제 처리 FE에서 검증 금지** (반드시 BE 검증 필수)
- **배찌 승인 로직 FE 구현 금지** (관리자 권한 필요)

### ✅ 준수 사항
- **모든 금액/포인트는 BE API에서 받아온 값 사용**
- **사용자 액션(호감/매칭/메시지 등)은 반드시 포인트 차감 후 진행**
- **개인정보 보호를 위해 이름은 마스킹 처리** (예: 김**, 이**)
- **모든 이미지는 업로드 전 압축 필수** (최대 1MB)
- **타겟층(30~50대) 고려한 큰 폰트, 명확한 UI**
- **에러 메시지는 사용자 친화적으로 작성** (기술 용어 지양)
- **로딩 상태 반드시 표시** (스켈레톤 UI 활용)
- **오프라인 대응** (네트워크 에러 시 안내 메시지)

---

# Part 2: 산출물 생성 가이드

## 문서 관리 규칙

### 화면 변경 시 문서 업데이트 (필수)
**화면이 업데이트, 추가, 삭제될 때마다 반드시 관련 .md 문서들을 함께 업데이트해야 합니다.**

```
화면 변경 시 업데이트 대상 문서:
├── docs/INFORMATION_ARCHITECTURE.md    # IA 구조, 사이트맵
├── docs/SCREEN_SPECIFICATIONS.md       # 화면별 기능 명세
├── docs/API_SPECIFICATION.md           # 연관 API 엔드포인트
├── docs/DESIGN_SYSTEM.md              # 새로운 UI 패턴 (필요시)
└── README.md                          # 전체 기능 목록
```

### 문서 동기화 체크리스트
- [ ] IA 문서의 사이트맵이 실제 라우팅과 일치하는가?
- [ ] 화면 명세가 실제 구현된 기능과 일치하는가?
- [ ] API 명세가 실제 사용되는 엔드포인트와 일치하는가?
- [ ] README의 기능 목록이 최신 상태인가?
- [ ] 포인트 비용 정보가 최신 상태인가?

## 프로젝트 산출물 구조

```
재연(再緣) 프로젝트/
├── README.md                              # 프로젝트 개요
├── CLAUDE.md                              # 개발 규칙 (이 파일)
├── docs/
│   ├── INFORMATION_ARCHITECTURE.md        # 정보 구조도
│   ├── SCREEN_SPECIFICATIONS.md           # 화면 명세서
│   ├── API_SPECIFICATION.md               # API 명세서
│   ├── DESIGN_SYSTEM.md                   # 디자인 시스템
│   ├── USER_FLOW.md                       # 사용자 플로우
│   ├── POINT_SYSTEM.md                    # 포인트 시스템 상세
│   ├── BADGE_SYSTEM.md                    # 배찌 시스템 상세
│   └── screenshots/                       # 화면 캡처
└── scripts/
    ├── capture-screens.mjs                # 스크린샷 자동 캡처
    └── generate-spec.cjs                  # 명세서 자동 생성
```

---

**이 문서는 재연(再緣) 프로젝트의 개발 표준을 정의합니다. 모든 개발자는 이 규칙을 준수해야 합니다.**
