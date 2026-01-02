# Components 폴더 구조 가이드

## 📁 폴더 구조

```
components/
├── interactive/          # 각 챕터별 인터랙티브 컴포넌트
│   ├── Chapter01ArrayLoop/
│   ├── Chapter02Sort/
│   ├── Chapter03Search/
│   ├── Chapter04String/
│   ├── Chapter05StackQueue/
│   ├── Chapter06Recursion/
│   ├── Chapter07Patterns/
│   ├── Chapter08ReactAlgo/
│   └── index.ts         # 동적 import 매핑
│
├── common/              # 공통 재사용 컴포넌트
│   └── common.scss      # 공통 스타일 (StatCard, FilterToggle 등)
│
└── styles/              # 전역 스타일 변수 및 믹스인
    ├── _variables.scss  # 색상, 간격, 그림자 등
    └── _mixins.scss     # 재사용 가능한 스타일 믹스인
```

## 🎯 사용 방법

### 1. 새 챕터 컴포넌트 만들기

```tsx
// src/components/interactive/Chapter01ArrayLoop/ArrayLoop.tsx
import './Chapter01.scss';

export default function ArrayLoop() {
  return (
    <div className="array-loop-container">
      <h3>배열과 반복 실습</h3>
      {/* 컴포넌트 내용 */}
    </div>
  );
}
```

### 2. SCSS 파일 작성

```scss
// src/components/interactive/Chapter01ArrayLoop/Chapter01.scss
@import '../../styles/variables';
@import '../../styles/mixins';

.array-loop-container {
  padding: $spacing-lg;

  .stats-grid {
    @include grid-auto-fit(250px, 1rem);
  }
}
```

### 3. AlgorithmDetailPage에서 사용

```tsx
import { Suspense } from 'react';
import { interactiveComponents } from '../components/interactive';

// 컴포넌트 동적 로드
const InteractiveComponent = interactiveComponents['Chapter01'];

<Suspense fallback={<div>로딩중...</div>}>
  <InteractiveComponent />
</Suspense>
```

## 📝 스타일 작성 규칙

1. **변수 사용**: `_variables.scss`에 정의된 변수 사용
2. **믹스인 활용**: 반복되는 스타일은 믹스인으로
3. **다크모드 지원**: `body.dark-mode &` 사용
4. **챕터당 하나의 SCSS**: `Chapter0X.scss` 네이밍

## 🔧 공통 컴포넌트

현재 `common.scss`에 정의된 클래스:
- `.stat-card`: 통계 카드
- `.filter-toggle`: 필터 토글 버튼
- `.code-block`: 코드 블록

## 💡 팁

- 각 챕터는 독립적으로 동작해야 함
- 공통 스타일은 `common.scss`에 추가
- 새로운 변수는 `_variables.scss`에 정의
