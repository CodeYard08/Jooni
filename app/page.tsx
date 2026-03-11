import { ProductCard, ProductListPage } from "@/src/features/product/ui";

type ProductSeed = {
  id: string;
  name: string;
  originalPrice: number;
  discountRate: number;
  finalPrice: number;
  rating: number;
  reviewCount: number;
  badges: string[];
  imageUrl: string;
  isWished: boolean;
};

const categoryFilters = ["전체", "로켓프레시", "주방", "간식", "선물세트"];
const shippingFilters = ["로켓배송", "오늘출고", "무료반품"];

function productImage(label: string, base: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="800" height="800" rx="48" fill="url(#bg)" />
      <circle cx="620" cy="180" r="120" fill="rgba(255,255,255,0.2)" />
      <circle cx="180" cy="650" r="140" fill="rgba(255,255,255,0.14)" />
      <text x="64" y="610" fill="white" font-size="64" font-family="Arial, Helvetica, sans-serif" font-weight="700">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const initialProducts: ProductSeed[] = [
  {
    id: "1",
    name: "조은리빙 시그니처 유기농 딸기 1kg",
    originalPrice: 21900,
    discountRate: 18,
    finalPrice: 17900,
    rating: 4.9,
    reviewCount: 1284,
    badges: ["로켓배송", "최저가"],
    imageUrl: productImage("딸기", "#f46b8a", "#8f1537"),
    isWished: true,
  },
  {
    id: "2",
    name: "스톤웨어 브런치 플레이트 4P 세트",
    originalPrice: 38900,
    discountRate: 23,
    finalPrice: 29900,
    rating: 4.8,
    reviewCount: 582,
    badges: ["오늘출고", "무료반품"],
    imageUrl: productImage("플레이트", "#b99b7d", "#7d5a40"),
    isWished: false,
  },
  {
    id: "3",
    name: "서울우유 생크림 롤케이크 기프트 박스",
    originalPrice: 27900,
    discountRate: 11,
    finalPrice: 24900,
    rating: 4.7,
    reviewCount: 913,
    badges: ["로켓배송"],
    imageUrl: productImage("롤케이크", "#f0d7a1", "#c1743d"),
    isWished: false,
  },
  {
    id: "4",
    name: "프리미엄 견과 에너지바 24개입",
    originalPrice: 19900,
    discountRate: 25,
    finalPrice: 14900,
    rating: 4.6,
    reviewCount: 2441,
    badges: ["오늘출고", "최저가"],
    imageUrl: productImage("에너지바", "#d1a054", "#6b3b12"),
    isWished: true,
  },
  {
    id: "5",
    name: "차분한 베이지 린넨 테이블 러너",
    originalPrice: 31800,
    discountRate: 21,
    finalPrice: 24900,
    rating: 4.8,
    reviewCount: 344,
    badges: ["무료반품"],
    imageUrl: productImage("테이블러너", "#d9c9b1", "#8a6b4d"),
    isWished: false,
  },
  {
    id: "6",
    name: "한우 사골 곰탕 500g x 5팩",
    originalPrice: 25900,
    discountRate: 16,
    finalPrice: 21700,
    rating: 4.9,
    reviewCount: 1812,
    badges: ["로켓배송", "오늘출고"],
    imageUrl: productImage("곰탕", "#b8c7d9", "#5f7086"),
    isWished: false,
  },
  {
    id: "7",
    name: "드립백 커피 블렌드 시그니처 30개입",
    originalPrice: 32900,
    discountRate: 27,
    finalPrice: 23900,
    rating: 4.8,
    reviewCount: 771,
    badges: ["최저가"],
    imageUrl: productImage("드립백", "#7d5f47", "#2f241c"),
    isWished: true,
  },
  {
    id: "8",
    name: "플로럴 핸드워시 듀오 세트",
    originalPrice: 26900,
    discountRate: 19,
    finalPrice: 21900,
    rating: 4.7,
    reviewCount: 468,
    badges: ["무료반품", "선물추천"],
    imageUrl: productImage("핸드워시", "#9bc7b4", "#3b7f6a"),
    isWished: false,
  },
];

export default function Home() {
  const productNodes = initialProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const filters = (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
      <section className="overflow-hidden rounded-[36px] border border-line bg-[radial-gradient(circle_at_top_left,_rgba(247,201,72,0.35),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.92),_rgba(252,248,241,0.92))] px-6 py-8 shadow-[0_24px_60px_rgba(85,58,34,0.08)] md:px-8 md:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-brand uppercase">
              Curated Grocery Market
            </div>
            <div className="space-y-3">
              <h1 className="max-w-xl text-4xl font-black tracking-[-0.04em] text-stone-950 md:text-6xl">
                오늘 바로 받고 싶은 식탁과 생활의 셀렉션
              </h1>
              <p className="max-w-xl text-sm leading-7 text-muted md:text-base">
                로켓배송 상품, 감도 있는 리빙 아이템, 선물하기 좋은 시즌
                셀렉션을 한 화면에서 고를 수 있게 홈을 구성했습니다.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-left text-sm text-stone-900 md:min-w-[320px]">
            <div className="rounded-3xl bg-white px-4 py-4 shadow-sm">
              <div className="text-2xl font-black text-brand">2h</div>
              <div className="mt-1 text-muted">평균 당일 출고</div>
            </div>
            <div className="rounded-3xl bg-white px-4 py-4 shadow-sm">
              <div className="text-2xl font-black text-brand">24+</div>
              <div className="mt-1 text-muted">큐레이션 테마</div>
            </div>
            <div className="rounded-3xl bg-stone-950 px-4 py-4 text-white shadow-sm">
              <div className="text-2xl font-black text-accent">4.8</div>
              <div className="mt-1 text-white/70">평균 만족도</div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-[30px] border border-line/80 bg-surface px-5 py-5 shadow-[0_18px_40px_rgba(71,46,33,0.05)] md:px-6">
        <div className="flex flex-wrap items-center gap-2">
          {categoryFilters.map((filter, index) => (
            <div
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                index === 0
                  ? "bg-stone-950 text-white"
                  : "bg-stone-100 text-stone-700"
              }`}
            >
                {filter}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {shippingFilters.map((filter, index) => (
            <div
              key={filter}
              className={`rounded-full border px-3 py-1.5 ${
                index === 0
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-muted"
              }`}
            >
                {filter}
            </div>
          ))}
          <div className="ml-auto rounded-full bg-pageBg px-3 py-1.5 text-muted">
            전체 · 로켓배송
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <main className="min-h-screen pb-12 pt-6 md:pt-10">
      <ProductListPage
        products={productNodes}
        filters={filters}
        sortLabel="추천순"
        totalCount={initialProducts.length}
      />
    </main>
  );
}
