# Jooni

Jooni는 이커머스 화면을 퍼블리싱 중심으로 정리하는 Next.js 프로젝트입니다.
현재는 쇼핑 홈 화면 UI와 도메인 구조 스캐폴드를 우선 구성한 상태입니다.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- pnpm

## Run

```bash
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000` 으로 확인할 수 있습니다.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Current Scope

- 쇼핑 홈 화면 퍼블리싱
- 상품 카드 / 상품 목록 레이아웃 UI
- 스크롤 시 짧게 압축되는 상단 바 퍼블리싱
- 이커머스 도메인 기준 `src` 구조 초안
- 상품 / 장바구니 / 주문 / 위시리스트 기능 명세 문서 정리

## Structure

```text
app/                   Next App Router 엔트리
docs/                  기능 명세 문서
src/entities/          도메인 엔티티 타입
src/features/          기능 단위 UI 및 구조
src/widgets/           위젯 레이어
src/shared/            공통 설정 및 유틸
src/page-layer/        페이지 레이어 스캐폴드
```

## Notes

- 현재 작업 기준은 퍼블리싱 우선입니다.
- 인터랙션 로직보다 정적 UI 목업과 구조 정리에 초점을 둡니다.
- 일부 `src` 내부 파일은 이후 확장을 위한 스캐폴드 상태입니다.

## Docs

- `docs/features-product.md`
- `docs/features-cart.md`
- `docs/features-order.md`
- `docs/features-wishlist.md`
