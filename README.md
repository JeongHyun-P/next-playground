## 🚀 Requirements

- **Node.js**: 22.x
- **Package Manager**: [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

---

## 📦 Setup Instructions

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

---

## 📚 Next.js 렌더링 방식

렌더링 방식은 필요에 따라 혼합 사용이 가능하며, 페이지 단위로 설정 가능. 기본적으로 Next가 판단해서 auto로 적용함

- [렌더링 방식 비교](#-렌더링-방식-비교)
- [사용 시기](#-사용-시기)
- [렌더링 방식 선택 참고](#-렌더링-방식-선택-참고)

---

### 📌 렌더링 방식 비교

| 구분          | SSG (Static Site Generation) | SSR (Server-Side Rendering) | ISR (Incremental Static Regeneration) | CSR (Client-Side Rendering) |
| ------------- | ---------------------------- | --------------------------- | ------------------------------------- | --------------------------- |
| 설명          | 빌드 시 HTML 미리 생성       | 요청 시마다 HTML 생성       | 빌드 + 주기적 재생성 (하이브리드)     | 클라이언트에서 JS로 렌더링  |
| 속도          | ✅ 가장 빠름                 | ❌ 느릴 수 있음             | ✅ 빠름 + 최신 데이터 주기적 반영     | 초기 느림, 이후 빠름        |
| 서버 부하     | ✅ 없음                      | ❌ 높음                     | ✅ 적음                               | ✅ 없음                     |
| 실시간 데이터 | ❌ 반영 안 됨                | ✅ 즉시 반영                | ✅ 주기적 반영                        | ✅ 완전 반영                |
| SEO           | ✅ 매우 좋음                 | ✅ 좋음                     | ✅ 좋음                               | ❌ 별도 처리 필요 (hydrate) |
| 사용 예       | 블로그, 랜딩 페이지          | 마이페이지, 대시보드        | 상품 상세, 블로그 글                  | SPA 앱, 관리자 페이지       |

### 📌 사용 시기

| 상황                  | 추천 렌더링 방식 |
| --------------------- | ---------------- |
| 거의 안 바뀌는 페이지 | ✅ SSG (정적)    |
| 자주 바뀌는 페이지    | ✅ SSR (서버)    |
| 적당히 바뀌는 페이지  | ✅ ISR (추천!)   |
| 로그인 필수, 동적 UX  | ✅ CSR (SPA)     |

### 📌 렌더링 방식 선택 참고

- 데이터가 자주 바뀜 → **SSR / ISR**
- SEO 중요 → **SSG / ISR / SSR**
- 로그인 이후 액세스 → **CSR / SSR**
- 페이지 속도 중요 → **SSG / ISR**
- `/` (홈) → **SSG**: 빠른 로딩, SEO 최적화
- `/products/[id]` → **ISR**: 빠른 응답 + 최신 데이터 유지
- `/admin` → **CSR**: 로그인 필요, 복잡한 인터랙션
- `/profile` → **SSR**: 사용자 맞춤 정보, 보안 중요
