# 재연(再緣) 디자인 시스템

**문서 버전**: 1.0
**최종 수정일**: 2025-01-XX

---

## 목차

1. [디자인 철학](#1-디자인-철학)
2. [컬러 시스템](#2-컬러-시스템)
3. [타이포그래피](#3-타이포그래피)
4. [간격 및 레이아웃](#4-간격-및-레이아웃)
5. [아이콘](#5-아이콘)
6. [컴포넌트](#6-컴포넌트)
7. [배찌 디자인](#7-배찌-디자인)
8. [애니메이션](#8-애니메이션)

---

## 1. 디자인 철학

### 핵심 가치

**신뢰 (Trust)**
- 30~50대 성숙한 사용자층에게 신뢰감을 주는 안정적인 디자인
- 과도한 장식 없이 깨끗하고 명확한 UI

**편안함 (Comfort)**
- 부드러운 색상과 충분한 여백으로 시각적 피로도 최소화
- 큰 터치 영역과 읽기 쉬운 폰트 크기

**품격 (Elegance)**
- 프리미엄 소개팅 서비스에 걸맞은 세련된 디자인
- 고급스러운 색상 조합과 우아한 애니메이션

**명확성 (Clarity)**
- 직관적인 아이콘과 명확한 레이블
- 불필요한 요소 제거, 핵심 기능 강조

### 디자인 원칙

1. **가독성 우선**: 작은 텍스트 지양, 최소 14px 이상
2. **충분한 대비**: WCAG AA 이상 준수
3. **일관성**: 모든 화면에서 동일한 패턴 유지
4. **피드백**: 모든 액션에 즉각적인 시각적 피드백
5. **접근성**: 색맹, 저시력 사용자 고려

---

## 2. 컬러 시스템

### 메인 컬러 (Primary Colors)

**Primary Blue** - 신뢰감 있는 차분한 블루
```
primary-900: #1A3D52  // 매우 진한 블루 (텍스트)
primary-800: #2C5F7A  // 진한 블루 (hover)
primary-700: #4A7C99  // 메인 블루 (기본)
primary-600: #6B9BB8  // 밝은 블루
primary-500: #8CB4CC  // 더 밝은 블루
primary-400: #ADC9DC  // 매우 밝은 블루
primary-300: #C7DBEA  // 아주 연한 블루
primary-200: #E1EDF5  // 배경용 블루
primary-100: #F0F6FA  // 아주 연한 배경
```

**사용처**:
- 주요 버튼, 링크
- 활성 상태 표시
- 중요한 액션 강조

### 악센트 컬러 (Accent Colors)

**Accent Gold** - 따뜻함과 품격을 더하는 베이지 골드
```
accent-900: #A66D3E  // 진한 골드
accent-800: #D4956A  // 중간 골드
accent-700: #E8A87C  // 메인 골드
accent-600: #EDBA93  // 밝은 골드
accent-500: #F2CCAA  // 더 밝은 골드
accent-400: #F7DDC1  // 매우 밝은 골드
accent-300: #FAEAD8  // 아주 연한 골드
accent-200: #FCF4ED  // 배경용 골드
```

**사용처**:
- 프리미엄 기능 강조
- 배찌 아이콘
- 특별한 이벤트 표시

### 상태 컬러 (State Colors)

**Success** - 성숙한 그린
```
success-700: #2F7A5C  // 진한 그린
success-600: #52A885  // 메인 그린
success-500: #7BC3A6  // 밝은 그린
success-400: #A4D6C1  // 매우 밝은 그린
success-300: #CDE9DD  // 아주 연한 그린
```

**Warning** - 주의를 끄는 오렌지
```
warning-700: #C08020  // 진한 오렌지
warning-600: #E6A23C  // 메인 오렌지
warning-500: #EDB968  // 밝은 오렌지
warning-400: #F4D094  // 매우 밝은 오렌지
warning-300: #FAE7BF  // 아주 연한 오렌지
```

**Error** - 부드러운 레드
```
error-700: #A63F3F  // 진한 레드
error-600: #D85F5F  // 메인 레드
error-500: #E58585  // 밝은 레드
error-400: #F0ABAB  // 매우 밝은 레드
error-300: #F8D1D1  // 아주 연한 레드
```

**Info** - 정보를 전달하는 블루
```
info-700: #3B7AB8  // 진한 블루
info-600: #5F9FD8  // 메인 블루
info-500: #85B8E3  // 밝은 블루
info-400: #ABD1EE  // 매우 밝은 블루
info-300: #D5E8F7  // 아주 연한 블루
```

### 중립 컬러 (Neutral Colors)

**Gray Scale**
```
gray-900: #2C3E50  // 텍스트 (primary)
gray-800: #495A6B  // 텍스트 (secondary)
gray-700: #6C757D  // 텍스트 (tertiary)
gray-600: #8F9BA8  // 비활성 텍스트
gray-500: #ADB5BD  // 플레이스홀더
gray-400: #CED4DA  // 구분선 (진함)
gray-300: #E1E4E8  // 구분선 (기본)
gray-200: #F1F3F5  // 배경 (밝음)
gray-100: #F8F9FA  // 배경 (아주 밝음)
white: #FFFFFF     // 흰색
black: #000000     // 검정 (사용 금지, gray-900 사용)
```

### 배찌 컬러 (Badge Colors)

```
badge-university: #4169E1    // 인서울 대학 (로열블루)
badge-enterprise: #1E90FF    // 대기업 (다저블루)
badge-income-5k: #FFD700     // 연봉 5천+ (골드)
badge-income-10k: #FF8C00    // 연봉 1억+ (다크오렌지)
badge-asset-1: #32CD32       // 자산 1억+ (라임그린)
badge-asset-3: #228B22       // 자산 3억+ (포레스트그린)
badge-asset-5: #006400       // 자산 5억+ (다크그린)
```

### 배경 컬러 (Background Colors)

```
bg-primary: #FFFFFF          // 기본 배경 (흰색)
bg-secondary: #F8F9FA        // 보조 배경 (아주 연한 회색)
bg-tertiary: #F1F3F5         // 3차 배경 (연한 회색)
bg-surface: #FFFFFF          // 카드 배경
bg-overlay: rgba(0,0,0,0.5)  // 모달 오버레이
```

---

## 3. 타이포그래피

### 폰트 패밀리

**한글**: Pretendard (기본), Apple SD Gothic Neo, Noto Sans KR
**영문**: Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
**숫자**: Pretendard, SF Mono, Menlo

```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
             'Noto Sans KR', 'Segoe UI', 'Roboto', sans-serif;
```

### 폰트 크기 (Font Sizes)

```css
/* Display - 큰 타이틀 */
text-display-lg: 48px / 56px (font-size / line-height)
text-display-md: 40px / 48px
text-display-sm: 36px / 44px

/* Heading - 제목 */
text-heading-xl: 32px / 40px
text-heading-lg: 28px / 36px
text-heading-md: 24px / 32px
text-heading-sm: 20px / 28px
text-heading-xs: 18px / 24px

/* Body - 본문 */
text-body-lg: 18px / 28px   // 강조 본문
text-body-md: 16px / 24px   // 기본 본문
text-body-sm: 14px / 20px   // 작은 본문

/* Label - 레이블 */
text-label-lg: 16px / 20px
text-label-md: 14px / 18px
text-label-sm: 12px / 16px

/* Caption - 캡션 */
text-caption: 12px / 16px
```

### 폰트 굵기 (Font Weights)

```css
font-thin: 100        // 사용 금지
font-light: 300       // 사용 금지 (가독성 낮음)
font-regular: 400     // 기본 텍스트
font-medium: 500      // 강조 텍스트
font-semibold: 600    // 제목
font-bold: 700        // 강한 강조
font-extrabold: 800   // 큰 타이틀
font-black: 900       // 사용 금지
```

### 텍스트 스타일 예시

```tsx
// 화면 제목
<h1 className="text-heading-lg font-semibold text-gray-900">
  오늘의 인연
</h1>

// 본문
<p className="text-body-md text-gray-800">
  안녕하세요. 새로운 인연을 찾고 있습니다.
</p>

// 레이블
<label className="text-label-md font-medium text-gray-700">
  이메일
</label>

// 캡션
<span className="text-caption text-gray-600">
  2025.01.15 · 서울 강남구
</span>
```

---

## 4. 간격 및 레이아웃

### 간격 시스템 (Spacing Scale)

8px 기반 간격 시스템
```
spacing-0: 0px
spacing-1: 4px     // 아주 작은 간격
spacing-2: 8px     // 기본 간격
spacing-3: 12px
spacing-4: 16px    // 일반적인 간격
spacing-5: 20px
spacing-6: 24px    // 큰 간격
spacing-8: 32px
spacing-10: 40px
spacing-12: 48px
spacing-16: 64px   // 섹션 간격
spacing-20: 80px
spacing-24: 96px
```

### 컨테이너 너비 (Container Widths)

```css
container-xs: 320px   // 최소 모바일
container-sm: 375px   // 일반 모바일
container-md: 428px   // 큰 모바일
container-lg: 768px   // 태블릿
container-xl: 1024px  // 데스크톱 (사용 안 함)
```

**모바일 웹 기본**: 375px ~ 428px 기준 설계

### 화면 여백 (Screen Padding)

```css
padding-screen: 16px   // 화면 좌우 기본 여백
padding-section: 24px  // 섹션 상하 여백
```

### 카드 간격

```css
gap-cards: 16px        // 카드 사이 간격 (그리드)
gap-list: 12px         // 리스트 아이템 간격
```

### 레이아웃 예시

```tsx
// 화면 기본 구조
<div className="px-4 py-6">
  {/* 섹션 */}
  <section className="mb-8">
    <h2 className="mb-4">섹션 제목</h2>
    {/* 카드 그리드 */}
    <div className="grid grid-cols-2 gap-4">
      <Card />
      <Card />
    </div>
  </section>
</div>
```

---

## 5. 아이콘

### 아이콘 시스템

**아이콘 라이브러리**: Heroicons (Outline + Solid)

**아이콘 크기**:
```
icon-xs: 16x16px
icon-sm: 20x20px
icon-md: 24x24px   // 기본
icon-lg: 32x32px
icon-xl: 48x48px
```

### 주요 아이콘 정의

| 기능 | 아이콘 | 타입 |
|------|--------|------|
| 홈 | HomeIcon | Outline/Solid |
| 커뮤니티 | ChatBubbleLeftRightIcon | Outline/Solid |
| 알림 | BellIcon | Outline/Solid |
| 마이페이지 | UserCircleIcon | Outline/Solid |
| 호감 | HeartIcon | Outline/Solid |
| 매칭 | SparklesIcon | Outline/Solid |
| 소개팅 | CalendarDaysIcon | Outline/Solid |
| 메시지 | EnvelopeIcon | Outline/Solid |
| 전화 | PhoneIcon | Outline/Solid |
| 포인트 | CurrencyDollarIcon | Outline/Solid |
| 설정 | Cog6ToothIcon | Outline/Solid |
| 사진 | PhotoIcon | Outline/Solid |
| 검색 | MagnifyingGlassIcon | Outline/Solid |
| 필터 | FunnelIcon | Outline/Solid |
| 더보기 | EllipsisVerticalIcon | Outline/Solid |
| 닫기 | XMarkIcon | Outline/Solid |
| 체크 | CheckIcon | Outline/Solid |

**사용 예시**:
```tsx
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

// 기본 (Outline)
<HeartIcon className="w-6 h-6 text-gray-700" />

// 활성 (Solid)
<HeartSolid className="w-6 h-6 text-error-600" />
```

---

## 6. 컴포넌트

### 6.1 Button (버튼)

**크기 (Sizes)**:
```
sm: h-9 px-3 text-sm      // 32px 높이
md: h-11 px-4 text-base   // 44px 높이 (기본)
lg: h-12 px-6 text-lg     // 48px 높이
```

**변형 (Variants)**:

**Primary** - 주요 액션
```tsx
<button className="
  h-11 px-4
  bg-primary-700 hover:bg-primary-800
  text-white font-medium
  rounded-lg
  transition-colors
">
  호감 보내기
</button>
```

**Secondary** - 보조 액션
```tsx
<button className="
  h-11 px-4
  bg-white border border-gray-300 hover:bg-gray-50
  text-gray-900 font-medium
  rounded-lg
  transition-colors
">
  취소
</button>
```

**Outline** - 강조 없는 액션
```tsx
<button className="
  h-11 px-4
  border border-primary-700 hover:bg-primary-50
  text-primary-700 font-medium
  rounded-lg
  transition-colors
">
  프로필 보기
</button>
```

**Disabled** - 비활성화
```tsx
<button disabled className="
  h-11 px-4
  bg-gray-200
  text-gray-500 font-medium
  rounded-lg
  cursor-not-allowed
">
  포인트 부족
</button>
```

### 6.2 Input (입력 필드)

**기본 Input**:
```tsx
<div className="space-y-2">
  <label className="text-label-md font-medium text-gray-700">
    이메일
  </label>
  <input
    type="email"
    placeholder="example@email.com"
    className="
      w-full h-11 px-4
      border border-gray-300 rounded-lg
      focus:border-primary-700 focus:ring-1 focus:ring-primary-700
      text-body-md text-gray-900
      placeholder:text-gray-500
      transition-all
    "
  />
</div>
```

**에러 상태**:
```tsx
<input className="
  border-error-600 focus:border-error-600 focus:ring-error-600
" />
<p className="mt-1 text-caption text-error-600">
  올바른 이메일을 입력해주세요
</p>
```

### 6.3 Card (카드)

**프로필 카드**:
```tsx
<div className="
  bg-white rounded-2xl
  shadow-sm hover:shadow-md
  overflow-hidden
  transition-shadow
">
  {/* 이미지 */}
  <div className="aspect-[3/4] relative">
    <img src="..." className="w-full h-full object-cover" />
    {/* 배찌 */}
    <div className="absolute top-3 right-3 flex gap-1">
      <BadgeIcon type="university" />
    </div>
  </div>

  {/* 정보 */}
  <div className="p-4">
    <h3 className="text-heading-xs font-semibold text-gray-900">
      김**, 38세
    </h3>
    <p className="text-body-sm text-gray-700">
      서울 강남구
    </p>
  </div>
</div>
```

### 6.4 Modal (모달)

**기본 모달**:
```tsx
<div className="
  fixed inset-0 z-50
  flex items-center justify-center
  bg-black/50
">
  {/* 모달 컨테이너 */}
  <div className="
    w-[calc(100%-32px)] max-w-md
    bg-white rounded-2xl
    p-6
  ">
    {/* 헤더 */}
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-heading-sm font-semibold text-gray-900">
        프로필 오픈
      </h2>
      <button className="p-1">
        <XMarkIcon className="w-6 h-6 text-gray-600" />
      </button>
    </div>

    {/* 내용 */}
    <p className="text-body-md text-gray-800 mb-6">
      100P를 사용하여 프로필을 오픈하시겠습니까?
    </p>

    {/* 버튼 */}
    <div className="flex gap-3">
      <button className="flex-1 h-11 bg-gray-200 text-gray-900 rounded-lg">
        취소
      </button>
      <button className="flex-1 h-11 bg-primary-700 text-white rounded-lg">
        확인
      </button>
    </div>
  </div>
</div>
```

### 6.5 Toast (토스트 알림)

```tsx
<div className="
  fixed bottom-20 left-4 right-4
  bg-gray-900 text-white
  rounded-lg px-4 py-3
  flex items-center gap-3
  shadow-lg
  animate-slide-up
">
  <CheckIcon className="w-5 h-5 text-success-500" />
  <p className="text-body-sm">호감을 보냈습니다</p>
</div>
```

### 6.6 Badge (배지)

```tsx
{/* 상태 배지 */}
<span className="
  inline-flex items-center
  px-2 py-1
  bg-success-300 text-success-700
  text-label-sm font-medium
  rounded-full
">
  매칭 성공
</span>

{/* 숫자 배지 */}
<div className="relative">
  <BellIcon className="w-6 h-6" />
  <span className="
    absolute -top-1 -right-1
    w-5 h-5
    bg-error-600 text-white
    text-xs font-semibold
    rounded-full
    flex items-center justify-center
  ">
    5
  </span>
</div>
```

---

## 7. 배찌 디자인

### 배찌 아이콘 스타일

**크기**:
```
badge-sm: 24x24px   // 프로필 카드
badge-md: 32x32px   // 프로필 상세
badge-lg: 48x48px   // 배찌 관리
```

**디자인 원칙**:
- 원형 또는 방패 모양
- 배찌 타입별 고유 색상
- 그라데이션 적용으로 고급스러움 강조
- 아이콘은 심플하고 명확하게

**배찌 예시**:

```tsx
// 인서울 대학
<div className="
  w-8 h-8 rounded-full
  bg-gradient-to-br from-blue-500 to-blue-700
  flex items-center justify-center
  shadow-md
">
  <AcademicCapIcon className="w-5 h-5 text-white" />
</div>

// 대기업
<div className="
  w-8 h-8 rounded-full
  bg-gradient-to-br from-sky-400 to-sky-600
  flex items-center justify-center
  shadow-md
">
  <BuildingOfficeIcon className="w-5 h-5 text-white" />
</div>

// 연봉 5천+
<div className="
  w-8 h-8 rounded-full
  bg-gradient-to-br from-yellow-400 to-yellow-600
  flex items-center justify-center
  shadow-md
">
  <CurrencyDollarIcon className="w-5 h-5 text-white" />
</div>
```

---

## 8. 애니메이션

### 애니메이션 원칙

1. **자연스러움**: 부드럽고 자연스러운 움직임
2. **빠른 응답**: 100~300ms 내 완료
3. **목적성**: 모든 애니메이션은 의미가 있어야 함
4. **절제**: 과도한 애니메이션 지양

### Easing Functions

```css
ease-in: cubic-bezier(0.4, 0, 1, 1)
ease-out: cubic-bezier(0, 0, 0.2, 1)          // 기본 (추천)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Duration (지속 시간)

```css
duration-fast: 150ms    // 빠른 애니메이션
duration-normal: 250ms  // 일반 애니메이션 (기본)
duration-slow: 350ms    // 느린 애니메이션
```

### 주요 애니메이션

**페이드 인**:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 250ms ease-out;
}
```

**슬라이드 업**:
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 250ms ease-out;
}
```

**스케일 인**:
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 250ms ease-out;
}
```

**호버 효과**:
```css
.hover-lift {
  transition: transform 150ms ease-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

**버튼 클릭 효과**:
```css
.btn-press {
  transition: transform 150ms ease-out;
}

.btn-press:active {
  transform: scale(0.98);
}
```

---

## 사용 예시

### 완전한 화면 예시

```tsx
import { HeartIcon, SparklesIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const ProfileDetailScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-300 px-4 py-3">
        <h1 className="text-heading-md font-semibold text-gray-900">
          프로필
        </h1>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="px-4 py-6 space-y-6">
        {/* 프로필 카드 */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* 이미지 */}
          <div className="aspect-[3/4] relative">
            <img
              src="..."
              className="w-full h-full object-cover"
              alt="프로필 사진"
            />
            {/* 배찌 */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="
                w-8 h-8 rounded-full
                bg-gradient-to-br from-blue-500 to-blue-700
                flex items-center justify-center shadow-md
              ">
                <AcademicCapIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* 정보 */}
          <div className="p-5 space-y-4">
            {/* 기본 정보 */}
            <div>
              <h2 className="text-heading-lg font-semibold text-gray-900 mb-1">
                김**, 38세
              </h2>
              <p className="text-body-md text-gray-700">
                서울 강남구 · 이혼 1회 · 자녀 1명
              </p>
            </div>

            {/* 자기소개 */}
            <div>
              <h3 className="text-label-lg font-medium text-gray-900 mb-2">
                자기소개
              </h3>
              <p className="text-body-md text-gray-800 leading-relaxed">
                안녕하세요. 새로운 인연을 찾고 있습니다...
              </p>
            </div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="grid grid-cols-3 gap-3">
          <button className="
            h-12 flex flex-col items-center justify-center gap-1
            bg-white border border-gray-300 rounded-lg
            hover:bg-gray-50 transition-colors
          ">
            <HeartIcon className="w-6 h-6 text-error-600" />
            <span className="text-label-sm text-gray-900">호감</span>
          </button>

          <button className="
            h-12 flex flex-col items-center justify-center gap-1
            bg-white border border-gray-300 rounded-lg
            hover:bg-gray-50 transition-colors
          ">
            <SparklesIcon className="w-6 h-6 text-primary-700" />
            <span className="text-label-sm text-gray-900">매칭</span>
          </button>

          <button className="
            h-12 flex flex-col items-center justify-center gap-1
            bg-white border border-gray-300 rounded-lg
            hover:bg-gray-50 transition-colors
          ">
            <EnvelopeIcon className="w-6 h-6 text-gray-700" />
            <span className="text-label-sm text-gray-900">메시지</span>
          </button>
        </div>
      </main>
    </div>
  );
};
```

---

## Tailwind Config 설정

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1A3D52',
          800: '#2C5F7A',
          700: '#4A7C99',
          600: '#6B9BB8',
          500: '#8CB4CC',
          400: '#ADC9DC',
          300: '#C7DBEA',
          200: '#E1EDF5',
          100: '#F0F6FA',
        },
        accent: {
          900: '#A66D3E',
          800: '#D4956A',
          700: '#E8A87C',
          600: '#EDBA93',
          500: '#F2CCAA',
          400: '#F7DDC1',
          300: '#FAEAD8',
          200: '#FCF4ED',
        },
        success: {
          700: '#2F7A5C',
          600: '#52A885',
          500: '#7BC3A6',
          400: '#A4D6C1',
          300: '#CDE9DD',
        },
        warning: {
          700: '#C08020',
          600: '#E6A23C',
          500: '#EDB968',
          400: '#F4D094',
          300: '#FAE7BF',
        },
        error: {
          700: '#A63F3F',
          600: '#D85F5F',
          500: '#E58585',
          400: '#F0ABAB',
          300: '#F8D1D1',
        },
        info: {
          700: '#3B7AB8',
          600: '#5F9FD8',
          500: '#85B8E3',
          400: '#ABD1EE',
          300: '#D5E8F7',
        },
        gray: {
          900: '#2C3E50',
          800: '#495A6B',
          700: '#6C757D',
          600: '#8F9BA8',
          500: '#ADB5BD',
          400: '#CED4DA',
          300: '#E1E4E8',
          200: '#F1F3F5',
          100: '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', '56px'],
        'display-md': ['40px', '48px'],
        'display-sm': ['36px', '44px'],
        'heading-xl': ['32px', '40px'],
        'heading-lg': ['28px', '36px'],
        'heading-md': ['24px', '32px'],
        'heading-sm': ['20px', '28px'],
        'heading-xs': ['18px', '24px'],
        'body-lg': ['18px', '28px'],
        'body-md': ['16px', '24px'],
        'body-sm': ['14px', '20px'],
        'label-lg': ['16px', '20px'],
        'label-md': ['14px', '18px'],
        'label-sm': ['12px', '16px'],
        'caption': ['12px', '16px'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};
```

---

**문서 끝**

*이 디자인 시스템은 재연(再緣) 앱의 모든 UI/UX 디자인 표준을 정의합니다. 모든 화면과 컴포넌트는 이 시스템을 따라 디자인 및 개발되어야 합니다.*
