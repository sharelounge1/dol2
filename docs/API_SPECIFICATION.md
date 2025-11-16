# 재연(再緣) API 명세서

**문서 버전**: 1.0
**최종 수정일**: 2025-01-XX
**Base URL**: `https://api.dolsing-connect.com/api/v1`

---

## 목차

1. [공통 사항](#공통-사항)
2. [인증 API](#1-인증-api)
3. [프로필 API](#2-프로필-api)
4. [매칭 API](#3-매칭-api)
5. [커뮤니티 API](#4-커뮤니티-api)
6. [포인트 API](#5-포인트-api)
7. [배찌 API](#6-배찌-api)
8. [알림 API](#7-알림-api)
9. [관리자 API](#8-관리자-api)

---

## 공통 사항

### 인증 방식

**Bearer Token 인증**
```
Authorization: Bearer {access_token}
```

### 공통 응답 형식

**성공 응답**
```json
{
  "success": true,
  "data": { /* 실제 데이터 */ },
  "message": "선택적 메시지",
  "timestamp": "2025-01-15T10:30:00Z"
}
```

**실패 응답**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "사용자 친화적 오류 메시지",
    "details": "개발자용 상세 정보 (선택적)"
  },
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### HTTP 상태 코드

| 코드 | 의미 |
|------|------|
| 200 | OK - 성공 |
| 201 | Created - 생성 성공 |
| 400 | Bad Request - 잘못된 요청 |
| 401 | Unauthorized - 인증 실패 |
| 403 | Forbidden - 권한 없음 |
| 404 | Not Found - 리소스 없음 |
| 409 | Conflict - 충돌 (중복 등) |
| 500 | Internal Server Error - 서버 오류 |

### 공통 에러 코드

| 코드 | 메시지 |
|------|--------|
| `AUTH_INVALID_TOKEN` | 유효하지 않은 토큰입니다 |
| `AUTH_TOKEN_EXPIRED` | 토큰이 만료되었습니다 |
| `AUTH_INVALID_CREDENTIALS` | 이메일 또는 비밀번호가 올바르지 않습니다 |
| `INSUFFICIENT_POINTS` | 포인트가 부족합니다 |
| `RESOURCE_NOT_FOUND` | 요청한 리소스를 찾을 수 없습니다 |
| `VALIDATION_ERROR` | 입력 값이 올바르지 않습니다 |
| `DUPLICATE_RESOURCE` | 이미 존재하는 리소스입니다 |

---

## 1. 인증 API

### 1.1. 이메일 로그인

**Endpoint**: `POST /auth/login`

**Request**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "dGhpcyBpcyByZWZyZXNo...",
    "expiresIn": 3600,
    "user": {
      "id": "user_001",
      "email": "user@example.com",
      "nickname": "김**",
      "profilePhotoUrl": "https://cdn.example.com/profile/001.jpg",
      "points": 2500
    }
  }
}
```

**Error (401)**:
```json
{
  "success": false,
  "error": {
    "code": "AUTH_INVALID_CREDENTIALS",
    "message": "이메일 또는 비밀번호가 올바르지 않습니다"
  }
}
```

---

### 1.2. SNS 로그인

**Endpoint**: `POST /auth/social/:provider`

**Path Parameters**:
- `provider`: `kakao` | `naver` | `google`

**Request**:
```json
{
  "accessToken": "SNS에서 받은 액세스 토큰",
  "profileData": {
    "email": "user@example.com",
    "name": "홍길동"
  }
}
```

**Response (200 OK)**: 1.1과 동일

**신규 가입 필요 시 (201 Created)**:
```json
{
  "success": true,
  "data": {
    "needsSignup": true,
    "tempToken": "임시 토큰",
    "socialProfile": {
      "email": "user@example.com",
      "name": "홍길동",
      "profilePhotoUrl": "https://..."
    }
  }
}
```

---

### 1.3. 이메일 회원가입

**Endpoint**: `POST /auth/signup/email`

**Request**:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "agreedToTerms": true,
  "agreedToPrivacy": true,
  "agreedToLocation": true,
  "agreedToMarketing": false
}
```

**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "tempToken": "프로필 등록용 임시 토큰",
    "userId": "user_001"
  }
}
```

**Error (409 Conflict)**:
```json
{
  "success": false,
  "error": {
    "code": "DUPLICATE_EMAIL",
    "message": "이미 가입된 이메일입니다"
  }
}
```

---

### 1.4. 이메일 중복 확인

**Endpoint**: `GET /auth/check-email?email={email}`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "available": true
  }
}
```

---

### 1.5. 프로필 기본정보 등록

**Endpoint**: `POST /auth/signup/profile-basic`

**Headers**: `Authorization: Bearer {tempToken}`

**Request**:
```json
{
  "gender": "male",
  "birthDate": "1982-03-15",
  "divorceCount": 1,
  "hasChildren": true,
  "childrenCount": 2,
  "region": {
    "sido": "서울특별시",
    "sigungu": "강남구"
  }
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "profileId": "profile_001"
  }
}
```

---

### 1.6. 프로필 사진 등록

**Endpoint**: `POST /auth/signup/profile-photos`

**Headers**:
- `Authorization: Bearer {tempToken}`
- `Content-Type: multipart/form-data`

**Request (FormData)**:
```
photos: [File, File, File, ...]  // 최소 3개, 최대 10개
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "photoUrls": [
      "https://cdn.example.com/profiles/001/photo1.jpg",
      "https://cdn.example.com/profiles/001/photo2.jpg",
      "https://cdn.example.com/profiles/001/photo3.jpg"
    ]
  }
}
```

---

### 1.7. 프로필 상세정보 등록

**Endpoint**: `POST /auth/signup/profile-details`

**Request**:
```json
{
  "nickname": "행복한돌싱",
  "bio": "안녕하세요. 새로운 인연을 찾고 있습니다.",
  "occupation": "IT/컴퓨터",
  "height": 175,
  "bodyType": "보통",
  "education": "대졸",
  "smoking": "비흡연",
  "drinking": "가끔",
  "religion": "무교"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "profileComplete": true
  }
}
```

---

### 1.8. 본인인증 - 인증번호 발송

**Endpoint**: `POST /auth/verification/send`

**Request**:
```json
{
  "phoneNumber": "01012345678"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "verificationId": "verify_001",
    "expiresIn": 180
  }
}
```

---

### 1.9. 본인인증 - 인증번호 확인

**Endpoint**: `POST /auth/verification/verify`

**Request**:
```json
{
  "verificationId": "verify_001",
  "code": "123456"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "verified": true,
    "accessToken": "최종 액세스 토큰",
    "refreshToken": "리프레시 토큰",
    "user": {
      "id": "user_001",
      "email": "user@example.com",
      "nickname": "행복한돌싱",
      "profilePhotoUrl": "https://...",
      "points": 0
    }
  }
}
```

---

### 1.10. 토큰 갱신

**Endpoint**: `POST /auth/refresh`

**Request**:
```json
{
  "refreshToken": "dGhpcyBpcyByZWZyZXNo..."
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "accessToken": "새로운 액세스 토큰",
    "expiresIn": 3600
  }
}
```

---

## 2. 프로필 API

### 2.1. 내 프로필 조회

**Endpoint**: `GET /profile/me`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "id": "user_001",
    "email": "user@example.com",
    "nickname": "행복한돌싱",
    "gender": "male",
    "age": 42,
    "birthDate": "1982-03-15",
    "region": {
      "sido": "서울특별시",
      "sigungu": "강남구"
    },
    "divorceCount": 1,
    "hasChildren": true,
    "childrenCount": 2,
    "photos": [
      {
        "url": "https://cdn.example.com/profiles/001/photo1.jpg",
        "order": 0,
        "isPrimary": true
      }
    ],
    "bio": "안녕하세요. 새로운 인연을 찾고 있습니다.",
    "occupation": "IT/컴퓨터",
    "height": 175,
    "bodyType": "보통",
    "education": "대졸",
    "smoking": "비흡연",
    "drinking": "가끔",
    "religion": "무교",
    "badges": [
      {
        "type": "university",
        "name": "인서울 대학",
        "grantedAt": "2025-01-10T10:00:00Z"
      }
    ],
    "points": 2500,
    "createdAt": "2025-01-01T00:00:00Z"
  }
}
```

---

### 2.2. 다른 사용자 프로필 미리보기

**Endpoint**: `GET /profile/:userId/preview`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "id": "user_002",
    "nickname": "김**",
    "age": 38,
    "gender": "female",
    "region": {
      "sido": "서울특별시",
      "sigungu": "강남구"
    },
    "divorceCount": 1,
    "hasChildren": true,
    "childrenCount": 1,
    "previewPhoto": {
      "url": "https://cdn.example.com/profiles/002/photo1_blur.jpg",
      "isBlurred": true
    },
    "badges": [
      {
        "type": "enterprise",
        "icon": "https://cdn.example.com/badges/enterprise.svg"
      }
    ],
    "isOpened": false
  }
}
```

---

### 2.3. 프로필 오픈 (100P)

**Endpoint**: `POST /profile/:userId/open`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "profile": {
      "id": "user_002",
      "nickname": "김**",
      "age": 38,
      "gender": "female",
      "region": {
        "sido": "서울특별시",
        "sigungu": "강남구"
      },
      "divorceCount": 1,
      "hasChildren": true,
      "childrenCount": 1,
      "photos": [
        {
          "url": "https://cdn.example.com/profiles/002/photo1.jpg",
          "order": 0,
          "isPrimary": true
        }
      ],
      "bio": "자기소개 내용...",
      "occupation": "금융/보험",
      "height": 165,
      "bodyType": "슬림",
      "education": "대졸",
      "smoking": "비흡연",
      "drinking": "가끔",
      "religion": "기독교",
      "badges": [
        {
          "type": "enterprise",
          "name": "대기업 재직",
          "icon": "https://cdn.example.com/badges/enterprise.svg"
        }
      ]
    },
    "pointsDeducted": 100,
    "remainingPoints": 2400
  }
}
```

**Error (402)**:
```json
{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_POINTS",
    "message": "포인트가 부족합니다",
    "details": {
      "required": 100,
      "current": 50
    }
  }
}
```

---

### 2.4. 프로필 수정

**Endpoint**: `PUT /profile/me`

**Request**:
```json
{
  "nickname": "새로운닉네임",
  "bio": "수정된 자기소개",
  "occupation": "교육/학원",
  "height": 176,
  "bodyType": "탄탄",
  "smoking": "비흡연",
  "drinking": "자주",
  "religion": "무교"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "updated": true,
    "profile": { /* 수정된 프로필 */ }
  }
}
```

---

### 2.5. 프로필 사진 추가

**Endpoint**: `POST /profile/me/photos`

**Headers**: `Content-Type: multipart/form-data`

**Request (FormData)**:
```
photo: File
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "photoUrl": "https://cdn.example.com/profiles/001/photo4.jpg",
    "totalPhotos": 4
  }
}
```

---

### 2.6. 프로필 사진 삭제

**Endpoint**: `DELETE /profile/me/photos/:photoId`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "deleted": true,
    "remainingPhotos": 3
  }
}
```

---

### 2.7. 프로필 사진 순서 변경

**Endpoint**: `PUT /profile/me/photos/reorder`

**Request**:
```json
{
  "photoIds": ["photo_3", "photo_1", "photo_2", "photo_4"]
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "updated": true
  }
}
```

---

## 3. 매칭 API

### 3.1. 오늘의 카드 조회

**Endpoint**: `GET /matching/today-cards`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "morningCard": {
      "userId": "user_002",
      "issuedAt": "2025-01-15T09:00:00Z",
      "expiresAt": "2025-01-15T23:59:59Z",
      "preview": {
        "nickname": "김**",
        "age": 38,
        "gender": "female",
        "region": {
          "sido": "서울특별시",
          "sigungu": "강남구"
        },
        "divorceCount": 1,
        "hasChildren": true,
        "childrenCount": 1,
        "previewPhoto": {
          "url": "https://...",
          "isBlurred": true
        },
        "badges": [...]
      },
      "isOpened": false
    },
    "eveningCard": null,
    "nextIssueTime": "2025-01-15T18:00:00Z"
  }
}
```

---

### 3.2. 카드 히스토리 조회

**Endpoint**: `GET /matching/card-history`

**Query Parameters**:
- `page`: 페이지 번호 (default: 1)
- `size`: 페이지 크기 (default: 20)
- `filter`: `all` | `liked_sent` | `liked_received` | `matched_sent` | `matched_received` | ...

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "cards": [
      {
        "userId": "user_002",
        "viewedAt": "2025-01-15T10:30:00Z",
        "expiresAt": "2025-01-25T10:30:00Z",
        "preview": { /* 프로필 미리보기 */ },
        "actions": {
          "likeSent": true,
          "likeReceived": false,
          "matchSent": false,
          "matchReceived": false,
          "dateSent": false,
          "dateReceived": false,
          "messageSent": false,
          "messageReceived": false,
          "phoneViewed": false
        },
        "isOpened": true
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 98,
      "hasNext": true
    }
  }
}
```

---

### 3.3. 호감 보내기 (200P)

**Endpoint**: `POST /matching/like`

**Request**:
```json
{
  "targetUserId": "user_002"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "actionId": "action_001",
    "type": "like",
    "targetUserId": "user_002",
    "pointsDeducted": 200,
    "remainingPoints": 2300,
    "createdAt": "2025-01-15T10:45:00Z",
    "isMutual": false
  }
}
```

**양쪽 호감 시**:
```json
{
  "success": true,
  "data": {
    "actionId": "action_001",
    "type": "like",
    "targetUserId": "user_002",
    "pointsDeducted": 200,
    "remainingPoints": 2300,
    "createdAt": "2025-01-15T10:45:00Z",
    "isMutual": true,
    "message": "서로 호감을 보냈습니다!"
  }
}
```

---

### 3.4. 매칭 신청 (300P)

**Endpoint**: `POST /matching/match`

**Request**:
```json
{
  "targetUserId": "user_002"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "actionId": "action_002",
    "type": "match",
    "targetUserId": "user_002",
    "pointsDeducted": 300,
    "remainingPoints": 2000,
    "status": "pending",
    "createdAt": "2025-01-15T11:00:00Z"
  }
}
```

---

### 3.5. 소개팅 신청 (500P)

**Endpoint**: `POST /matching/date`

**Request**:
```json
{
  "targetUserId": "user_002"
}
```

**Response (200 OK)**: 3.4와 유사

---

### 3.6. 메시지 보내기 (500P)

**Endpoint**: `POST /matching/message`

**Request**:
```json
{
  "targetUserId": "user_002",
  "content": "안녕하세요. 프로필 보고 연락드립니다."
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "messageId": "msg_001",
    "targetUserId": "user_002",
    "content": "안녕하세요. 프로필 보고 연락드립니다.",
    "pointsDeducted": 500,
    "remainingPoints": 1500,
    "sentAt": "2025-01-15T11:30:00Z"
  }
}
```

---

### 3.7. 매칭 신청 승인 (300P)

**Endpoint**: `POST /matching/:actionId/approve`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "actionId": "action_002",
    "status": "approved",
    "pointsDeducted": 300,
    "remainingPoints": 1200,
    "canViewPhone": true,
    "approvedAt": "2025-01-15T12:00:00Z"
  }
}
```

---

### 3.8. 매칭 신청 거부

**Endpoint**: `POST /matching/:actionId/reject`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "actionId": "action_002",
    "status": "rejected",
    "rejectedAt": "2025-01-15T12:00:00Z"
  }
}
```

---

### 3.9. 번호 확인 (500P)

**Endpoint**: `POST /matching/view-phone`

**Request**:
```json
{
  "targetUserId": "user_002"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "phoneNumber": "010-1234-5678",
    "pointsDeducted": 500,
    "remainingPoints": 700,
    "viewedAt": "2025-01-15T13:00:00Z"
  }
}
```

**Error (403)**:
```json
{
  "success": false,
  "error": {
    "code": "MATCHING_NOT_APPROVED",
    "message": "매칭이 승인되지 않았습니다"
  }
}
```

---

### 3.10. 받은 액션 목록

**Endpoint**: `GET /matching/received-actions`

**Query Parameters**:
- `type`: `like` | `match` | `date` | `message`
- `page`, `size`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "actions": [
      {
        "actionId": "action_003",
        "type": "like",
        "fromUser": {
          "userId": "user_003",
          "nickname": "이**",
          "age": 40,
          "region": { "sido": "서울특별시", "sigungu": "서초구" },
          "previewPhoto": "https://..."
        },
        "status": "pending",
        "receivedAt": "2025-01-15T14:00:00Z"
      }
    ],
    "pagination": { /* ... */ }
  }
}
```

---

### 3.11. 보낸 액션 목록

**Endpoint**: `GET /matching/sent-actions`

**Query Parameters**: 3.10과 동일

**Response (200 OK)**: 3.10과 유사

---

## 4. 커뮤니티 API

### 4.1. 게시글 목록 조회

**Endpoint**: `GET /community/posts`

**Query Parameters**:
- `board`: `free` | `meetup`
- `topic`: 번개 주제 (meetup인 경우)
- `search`: 검색어
- `sort`: `latest` | `popular`
- `page`, `size`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "postId": "post_001",
        "board": "free",
        "title": "강남에서 커피 한잔",
        "content": "오늘 오후 시간 되시는 분...",
        "author": {
          "userId": "user_004",
          "nickname": "박**",
          "region": { "sido": "서울특별시", "sigungu": "강남구" }
        },
        "photos": [
          "https://cdn.example.com/posts/001/photo1.jpg"
        ],
        "likesCount": 15,
        "commentsCount": 8,
        "createdAt": "2025-01-15T15:00:00Z"
      }
    ],
    "pagination": { /* ... */ }
  }
}
```

---

### 4.2. 게시글 상세 조회

**Endpoint**: `GET /community/posts/:postId`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "postId": "post_001",
    "board": "free",
    "title": "강남에서 커피 한잔",
    "content": "오늘 오후 시간 되시는 분 계실까요? 편하게 커피 한잔 하실 분 찾습니다.",
    "author": {
      "userId": "user_004",
      "nickname": "박**",
      "region": { "sido": "서울특별시", "sigungu": "강남구" }
    },
    "photos": [
      "https://cdn.example.com/posts/001/photo1.jpg"
    ],
    "likesCount": 15,
    "commentsCount": 8,
    "isLiked": false,
    "createdAt": "2025-01-15T15:00:00Z",
    "comments": [
      {
        "commentId": "comment_001",
        "author": {
          "userId": "user_005",
          "nickname": "최**"
        },
        "content": "저 오후 4시 이후 가능합니다!",
        "createdAt": "2025-01-15T15:30:00Z"
      }
    ]
  }
}
```

---

### 4.3. 게시글 작성

**Endpoint**: `POST /community/posts`

**Headers**: `Content-Type: multipart/form-data`

**Request (FormData)**:
```
board: "free" | "meetup"
title: "제목"
content: "내용"
topic: "coffee" (meetup인 경우)
photos: [File, File, ...]
meetupInfo: JSON.stringify({
  date: "2025-01-16T16:00:00Z",
  location: "강남역 스타벅스",
  maxParticipants: 4
}) (meetup인 경우)
```

**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "postId": "post_002",
    "createdAt": "2025-01-15T16:00:00Z"
  }
}
```

---

### 4.4. 게시글 수정

**Endpoint**: `PUT /community/posts/:postId`

**Request**: 4.3과 유사

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "updated": true,
    "postId": "post_002"
  }
}
```

---

### 4.5. 게시글 삭제

**Endpoint**: `DELETE /community/posts/:postId`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```

---

### 4.6. 게시글 좋아요

**Endpoint**: `POST /community/posts/:postId/like`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "liked": true,
    "likesCount": 16
  }
}
```

---

### 4.7. 댓글 작성

**Endpoint**: `POST /community/posts/:postId/comments`

**Request**:
```json
{
  "content": "저도 관심 있습니다!"
}
```

**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "commentId": "comment_002",
    "createdAt": "2025-01-15T16:30:00Z"
  }
}
```

---

### 4.8. 댓글 삭제

**Endpoint**: `DELETE /community/posts/:postId/comments/:commentId`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "deleted": true
  }
}
```

---

## 5. 포인트 API

### 5.1. 포인트 잔액 조회

**Endpoint**: `GET /points/balance`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "points": 2500,
    "lastUpdated": "2025-01-15T17:00:00Z"
  }
}
```

---

### 5.2. 포인트 비용 조회

**Endpoint**: `GET /points/prices`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "PROFILE_OPEN": 100,
    "SEND_LIKE": 200,
    "REQUEST_MATCH": 300,
    "REQUEST_DATE": 500,
    "SEND_MESSAGE": 500,
    "VIEW_PHONE": 500
  }
}
```

---

### 5.3. 충전 패키지 조회

**Endpoint**: `GET /points/packages`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "packages": [
      {
        "packageId": "pkg_001",
        "name": "스타터 패키지",
        "amount": 10000,
        "points": 1000,
        "bonusPoints": 0,
        "totalPoints": 1000
      },
      {
        "packageId": "pkg_002",
        "name": "베이직 패키지",
        "amount": 30000,
        "points": 3000,
        "bonusPoints": 0,
        "totalPoints": 3000
      },
      {
        "packageId": "pkg_003",
        "name": "프리미엄 패키지",
        "amount": 50000,
        "points": 5000,
        "bonusPoints": 300,
        "totalPoints": 5300
      },
      {
        "packageId": "pkg_004",
        "name": "VIP 패키지",
        "amount": 100000,
        "points": 10000,
        "bonusPoints": 1000,
        "totalPoints": 11000
      }
    ]
  }
}
```

---

### 5.4. 포인트 충전 요청

**Endpoint**: `POST /points/charge`

**Request**:
```json
{
  "packageId": "pkg_003",
  "paymentMethod": "card"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "orderId": "order_001",
    "amount": 50000,
    "points": 5300,
    "paymentUrl": "https://payment.pg.com/checkout/order_001",
    "expiresAt": "2025-01-15T18:00:00Z"
  }
}
```

---

### 5.5. 결제 완료 확인

**Endpoint**: `POST /points/charge/confirm`

**Request**:
```json
{
  "orderId": "order_001",
  "paymentKey": "PG사에서 받은 결제 키",
  "amount": 50000
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "chargeId": "charge_001",
    "orderId": "order_001",
    "amount": 50000,
    "pointsCharged": 5300,
    "currentPoints": 7800,
    "chargedAt": "2025-01-15T17:30:00Z"
  }
}
```

---

### 5.6. 포인트 사용 내역

**Endpoint**: `GET /points/history`

**Query Parameters**:
- `type`: `all` | `charge` | `use` | `refund`
- `startDate`, `endDate`
- `page`, `size`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "history": [
      {
        "id": "history_001",
        "type": "charge",
        "amount": 50000,
        "points": 5300,
        "description": "포인트 충전",
        "balance": 7800,
        "createdAt": "2025-01-15T17:30:00Z"
      },
      {
        "id": "history_002",
        "type": "use",
        "points": -100,
        "description": "프로필 오픈 (김**)",
        "balance": 7700,
        "createdAt": "2025-01-15T17:45:00Z"
      }
    ],
    "pagination": { /* ... */ }
  }
}
```

---

## 6. 배찌 API

### 6.1. 보유 배찌 조회

**Endpoint**: `GET /badges/my`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "badges": [
      {
        "badgeId": "badge_001",
        "type": "university",
        "name": "인서울 대학",
        "icon": "https://cdn.example.com/badges/university.svg",
        "grantedAt": "2025-01-10T10:00:00Z"
      }
    ]
  }
}
```

---

### 6.2. 신청 가능 배찌 목록

**Endpoint**: `GET /badges/available`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "badges": [
      {
        "type": "enterprise",
        "name": "대기업 재직",
        "description": "대기업에 재직 중인 회원에게 부여됩니다",
        "icon": "https://cdn.example.com/badges/enterprise.svg",
        "requiredDocuments": "재직증명서 또는 명함 사진을 제출해주세요"
      },
      {
        "type": "income-5k",
        "name": "연봉 5천만원 이상",
        "description": "연봉 5천만원 이상인 회원에게 부여됩니다",
        "icon": "https://cdn.example.com/badges/income-5k.svg",
        "requiredDocuments": "소득금액증명원 또는 원천징수영수증을 제출해주세요"
      }
    ]
  }
}
```

---

### 6.3. 배찌 신청

**Endpoint**: `POST /badges/apply`

**Headers**: `Content-Type: multipart/form-data`

**Request (FormData)**:
```
badgeType: "enterprise"
documents: [File, File, ...]
note: "추가 메모 (선택)"
```

**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "applicationId": "app_001",
    "badgeType": "enterprise",
    "status": "pending",
    "appliedAt": "2025-01-15T18:00:00Z"
  }
}
```

---

### 6.4. 배찌 신청 내역

**Endpoint**: `GET /badges/applications`

**Query Parameters**:
- `status`: `pending` | `approved` | `rejected`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "applicationId": "app_001",
        "badgeType": "enterprise",
        "badgeName": "대기업 재직",
        "status": "pending",
        "appliedAt": "2025-01-15T18:00:00Z",
        "processedAt": null,
        "adminNote": null
      },
      {
        "applicationId": "app_002",
        "badgeType": "university",
        "badgeName": "인서울 대학",
        "status": "approved",
        "appliedAt": "2025-01-08T10:00:00Z",
        "processedAt": "2025-01-10T10:00:00Z",
        "adminNote": "승인되었습니다"
      }
    ]
  }
}
```

---

## 7. 알림 API

### 7.1. 알림 목록 조회

**Endpoint**: `GET /notifications`

**Query Parameters**:
- `type`: `all` | `matching` | `message` | `card` | `system`
- `isRead`: `true` | `false`
- `page`, `size`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "notificationId": "noti_001",
        "type": "like_received",
        "title": "이**님이 호감을 보냈습니다",
        "content": "프로필을 확인해보세요",
        "data": {
          "userId": "user_003",
          "actionId": "action_003"
        },
        "isRead": false,
        "createdAt": "2025-01-15T19:00:00Z"
      },
      {
        "notificationId": "noti_002",
        "type": "card_issued",
        "title": "오늘의 새로운 카드가 발행되었습니다",
        "content": "새로운 인연을 확인해보세요",
        "data": {
          "cardType": "evening"
        },
        "isRead": true,
        "createdAt": "2025-01-15T18:00:00Z"
      }
    ],
    "unreadCount": 5,
    "pagination": { /* ... */ }
  }
}
```

---

### 7.2. 알림 읽음 처리

**Endpoint**: `PUT /notifications/:notificationId/read`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "notificationId": "noti_001",
    "isRead": true
  }
}
```

---

### 7.3. 모든 알림 읽음 처리

**Endpoint**: `PUT /notifications/read-all`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "readCount": 5
  }
}
```

---

### 7.4. FCM 토큰 등록

**Endpoint**: `POST /notifications/fcm-token`

**Request**:
```json
{
  "fcmToken": "FCM 디바이스 토큰",
  "platform": "ios" | "android" | "web"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "registered": true
  }
}
```

---

## 8. 관리자 API

### 8.1. 대시보드 통계

**Endpoint**: `GET /admin/dashboard`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "stats": {
      "dau": 1234,
      "newSignups": 45,
      "matchingSuccess": 23,
      "pointsCharged": 1500000,
      "pendingBadges": 12,
      "pendingReports": 5
    }
  }
}
```

---

### 8.2. 회원 목록 조회

**Endpoint**: `GET /admin/users`

**Query Parameters**:
- `search`: 검색어 (이메일, 닉네임, 전화번호)
- `status`: `active` | `suspended` | `withdrawn`
- `page`, `size`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "userId": "user_001",
        "email": "user@example.com",
        "nickname": "행복한돌싱",
        "gender": "male",
        "age": 42,
        "region": { "sido": "서울특별시", "sigungu": "강남구" },
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z",
        "lastLoginAt": "2025-01-15T19:30:00Z"
      }
    ],
    "pagination": { /* ... */ }
  }
}
```

---

### 8.3. 회원 상세 조회

**Endpoint**: `GET /admin/users/:userId`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "user": {
      /* 전체 프로필 정보 */
    },
    "stats": {
      "profileViews": 125,
      "likesSent": 15,
      "likesReceived": 23,
      "matchingSuccess": 3,
      "totalPointsCharged": 100000,
      "currentPoints": 2500
    },
    "recentActivity": [ /* ... */ ]
  }
}
```

---

### 8.4. 회원 이용 정지

**Endpoint**: `POST /admin/users/:userId/suspend`

**Request**:
```json
{
  "reason": "부적절한 행동",
  "duration": 7,
  "note": "관리자 메모"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "userId": "user_001",
    "status": "suspended",
    "suspendedUntil": "2025-01-22T00:00:00Z"
  }
}
```

---

### 8.5. 배찌 신청 목록

**Endpoint**: `GET /admin/badges/applications`

**Query Parameters**:
- `status`: `pending` | `approved` | `rejected`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "applicationId": "app_001",
        "user": {
          "userId": "user_001",
          "nickname": "행복한돌싱"
        },
        "badgeType": "enterprise",
        "badgeName": "대기업 재직",
        "documents": [
          "https://cdn.example.com/documents/app_001_doc1.jpg"
        ],
        "note": "사용자 메모",
        "status": "pending",
        "appliedAt": "2025-01-15T18:00:00Z"
      }
    ],
    "pagination": { /* ... */ }
  }
}
```

---

### 8.6. 배찌 승인

**Endpoint**: `POST /admin/badges/applications/:applicationId/approve`

**Request**:
```json
{
  "adminNote": "승인 메모"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "applicationId": "app_001",
    "status": "approved",
    "processedAt": "2025-01-16T10:00:00Z"
  }
}
```

---

### 8.7. 배찌 거부

**Endpoint**: `POST /admin/badges/applications/:applicationId/reject`

**Request**:
```json
{
  "reason": "서류가 불명확합니다",
  "adminNote": "거부 사유"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "applicationId": "app_001",
    "status": "rejected",
    "processedAt": "2025-01-16T10:00:00Z"
  }
}
```

---

### 8.8. 포인트 비용 설정

**Endpoint**: `PUT /admin/points/prices`

**Request**:
```json
{
  "PROFILE_OPEN": 100,
  "SEND_LIKE": 200,
  "REQUEST_MATCH": 300,
  "REQUEST_DATE": 500,
  "SEND_MESSAGE": 500,
  "VIEW_PHONE": 500
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "updated": true
  }
}
```

---

### 8.9. 충전 패키지 추가

**Endpoint**: `POST /admin/points/packages`

**Request**:
```json
{
  "name": "신규 이벤트 패키지",
  "amount": 20000,
  "points": 2000,
  "bonusPoints": 500,
  "isActive": true
}
```

**Response (201 Created)**:
```json
{
  "success": true,
  "data": {
    "packageId": "pkg_005",
    "createdAt": "2025-01-16T11:00:00Z"
  }
}
```

---

### 8.10. 신고 목록 조회

**Endpoint**: `GET /admin/reports`

**Query Parameters**:
- `status`: `pending` | `processing` | `completed`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "reports": [
      {
        "reportId": "report_001",
        "reporter": {
          "userId": "user_001",
          "nickname": "행복한돌싱"
        },
        "target": {
          "userId": "user_010",
          "nickname": "나쁜사람"
        },
        "type": "harassment",
        "reason": "욕설/비방",
        "description": "부적절한 메시지를 보냈습니다",
        "screenshots": [
          "https://cdn.example.com/reports/report_001_sc1.jpg"
        ],
        "status": "pending",
        "createdAt": "2025-01-15T20:00:00Z"
      }
    ],
    "pagination": { /* ... */ }
  }
}
```

---

### 8.11. 신고 처리

**Endpoint**: `POST /admin/reports/:reportId/process`

**Request**:
```json
{
  "action": "suspend",
  "suspendDuration": 7,
  "adminNote": "욕설 사용으로 7일 정지"
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "reportId": "report_001",
    "status": "completed",
    "processedAt": "2025-01-16T12:00:00Z"
  }
}
```

---

### 8.12. 통계 조회

**Endpoint**: `GET /admin/statistics`

**Query Parameters**:
- `type`: `users` | `matching` | `points` | `badges`
- `startDate`, `endDate`

**Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "type": "users",
    "period": {
      "startDate": "2025-01-01",
      "endDate": "2025-01-15"
    },
    "stats": {
      "dau": [
        { "date": "2025-01-15", "count": 1234 },
        { "date": "2025-01-14", "count": 1189 }
      ],
      "newSignups": {
        "total": 567,
        "byGender": {
          "male": 312,
          "female": 255
        },
        "byAge": {
          "30-35": 123,
          "36-40": 198,
          "41-45": 156,
          "46-50": 90
        }
      }
    }
  }
}
```

---

## 에러 코드 전체 목록

| 코드 | 메시지 |
|------|--------|
| `AUTH_INVALID_TOKEN` | 유효하지 않은 토큰입니다 |
| `AUTH_TOKEN_EXPIRED` | 토큰이 만료되었습니다 |
| `AUTH_INVALID_CREDENTIALS` | 이메일 또는 비밀번호가 올바르지 않습니다 |
| `DUPLICATE_EMAIL` | 이미 가입된 이메일입니다 |
| `DUPLICATE_PHONE` | 이미 가입된 휴대폰 번호입니다 |
| `DUPLICATE_NICKNAME` | 이미 사용 중인 닉네임입니다 |
| `VERIFICATION_FAILED` | 인증에 실패했습니다 |
| `VERIFICATION_EXPIRED` | 인증 시간이 만료되었습니다 |
| `INSUFFICIENT_POINTS` | 포인트가 부족합니다 |
| `INVALID_PHOTO_COUNT` | 사진은 최소 3장, 최대 10장입니다 |
| `INVALID_PHOTO_SIZE` | 사진 크기는 최대 1MB입니다 |
| `PROFILE_NOT_FOUND` | 프로필을 찾을 수 없습니다 |
| `ALREADY_OPENED` | 이미 오픈한 프로필입니다 |
| `MATCHING_NOT_APPROVED` | 매칭이 승인되지 않았습니다 |
| `ALREADY_SENT_ACTION` | 이미 해당 액션을 보냈습니다 |
| `POST_NOT_FOUND` | 게시글을 찾을 수 없습니다 |
| `COMMENT_NOT_FOUND` | 댓글을 찾을 수 없습니다 |
| `UNAUTHORIZED_ACCESS` | 권한이 없습니다 |
| `PAYMENT_FAILED` | 결제에 실패했습니다 |
| `BADGE_ALREADY_APPLIED` | 이미 신청한 배찌입니다 |
| `BADGE_ALREADY_OWNED` | 이미 보유한 배찌입니다 |

---

**문서 끝**

*이 API 명세서는 재연(再緣) 앱의 모든 엔드포인트를 정의합니다. 실제 구현 시 이 명세를 기준으로 개발하며, 변경 사항이 있을 경우 반드시 이 문서를 업데이트해야 합니다.*
