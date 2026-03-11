import Image from "next/image";
import { ProductCardProps } from "@/src/features/product/types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-line bg-surface shadow-[0_18px_40px_rgba(71,46,33,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative w-full overflow-hidden bg-stone-100 pt-[100%]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-brand"
            fill={product.isWished ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m12 21-1.45-1.32C5.4 15.04 2 11.95 2 8.15 2 5.06 4.42 2.7 7.5 2.7c1.74 0 3.41.81 4.5 2.09A6.03 6.03 0 0 1 16.5 2.7C19.58 2.7 22 5.06 22 8.15c0 3.8-3.4 6.89-8.55 11.54z"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {product.badges.map((b, i) => (
            <span
              key={i}
              className="rounded-full bg-accent/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.02em] text-brandStrong"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="min-h-12 text-[15px] font-semibold leading-6 text-stone-900">
          {product.name}
        </div>
        <div className="space-y-1">
          <div>
            <span className="text-xs text-stone-400 line-through">
              ₩{product.originalPrice.toLocaleString()}
            </span>{" "}
            <span className="text-xs font-semibold text-brand">
              {product.discountRate}%
            </span>
          </div>
          <div className="text-xl font-bold tracking-[-0.02em] text-stone-950">
            ₩{product.finalPrice.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center text-xs text-muted">
          <span className="flex items-center gap-1">
            ⭐ {product.rating.toFixed(1)}
          </span>
          <span className="ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}
