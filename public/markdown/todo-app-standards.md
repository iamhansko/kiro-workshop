---
title: Todo App Development Standards
inclusion: always
---

# Todo App 개발 표준

## 코딩 스타일

### HTML
- 시맨틱 태그 사용 (header, main, section, article 등)
- 접근성 속성 포함 (aria-label, alt 등)
- 들여쓰기: 2칸 스페이스

### CSS
- BEM 방법론 사용 (Block__Element--Modifier)
- CSS 변수 활용 (--primary-color 등)
- 모바일 퍼스트 반응형 디자인
- 들여쓰기: 2칸 스페이스

### JavaScript
- ES6+ 문법 사용
- const/let 사용 (var 금지)
- 함수명은 동사로 시작 (addTodo, deleteTodo)
- 주석은 한글로 작성
- 들여쓰기: 2칸 스페이스

## 파일 구조
```
todo-app/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/
```

## 기능 구현 원칙
- 로컬 스토리지 사용으로 데이터 영속성 보장
- 사용자 입력 검증 필수
- 에러 처리 포함
- 접근성 고려 (키보드 네비게이션 등)

## 네이밍 규칙
- HTML ID: kebab-case (todo-input, todo-list)
- CSS 클래스: BEM 방식 (todo__item--completed)
- JavaScript 변수: camelCase (todoList, addTodoBtn)
