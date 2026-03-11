import { ProductListPageProps } from "@/src/features/product/types";

export default function ProductListPage({
  products,
  filters,
  sortLabel,
  totalCount,
}: ProductListPageProps) {
  return (
    <div className="bg-pageBg min-h-screen">
      <div className="px-4 pt-3 md:px-8">{filters}</div>
      <div className="sticky top-0 z-20 px-4 py-3 md:px-8">
        <div className="scroll-compact-bar mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-[24px] border border-line/80 bg-white/88 px-4 py-3 backdrop-blur">
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              Product View
            </div>
            <div className="truncate text-base font-medium text-stone-900">
              총 {totalCount}개 상품
            </div>
          </div>
          <div className="rounded-full border border-line bg-white px-3 py-2 text-sm text-stone-900">
            {sortLabel}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:grid-cols-4">
        {products}
      </div>
    </div>
  );
}
