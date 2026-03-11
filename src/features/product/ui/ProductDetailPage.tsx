import Image from "next/image";
import { ProductDetailPageProps } from "@/src/features/product/types";

export default function ProductDetailPage({
  product,
  selectedOption,
  quantity,
  isWished,
  onWishToggle,
  onQuantityChange,
}: ProductDetailPageProps) {
  return (
    <div className="bg-pageBg min-h-screen p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative w-full pt-[100%] bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
            <button
              onClick={onWishToggle}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-red-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill={isWished ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2 flex space-x-2">
            {product.images.map((src, i) => (
              <div key={i} className="w-16 h-16 bg-gray-100">
                <Image
                  src={src}
                  alt={`${product.name} ${i}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-semibold mb-1">{product.name}</h1>
          <div className="flex flex-wrap gap-1 mb-2">
            {product.badges.map((b, i) => (
              <span
                key={i}
                className="text-xs px-1.5 py-0.5 bg-yellow-400 text-red-600 rounded"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mb-2">
            <span className="text-xs line-through text-gray-500">
              ₩{product.originalPrice.toLocaleString()}
            </span>{" "}
            <span className="text-xs text-red-500">
              {product.discountRate}%
            </span>
          </div>
          <div className="text-2xl font-bold mb-4">
            ₩{product.finalPrice.toLocaleString()}
          </div>
          <div className="mb-4">{selectedOption}</div>
          <div className="flex items-center mb-4">
            <button
              onClick={() => onQuantityChange(quantity - 1)}
              className="px-2 py-1 border"
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              className="px-2 py-1 border"
            >
              +
            </button>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-2 sticky bottom-0 bg-white p-2">
            <button className="flex-1 bg-gray-300 text-center py-2 rounded">
              장바구니 담기
            </button>
            <button className="flex-1 bg-red-500 text-white text-center py-2 rounded">
              바로구매
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-sm font-semibold mb-2">배송 정보</h2>
        <div className="text-xs">로켓배송 예상 3월 15일 도착</div>
      </div>
      <div className="mt-4 bg-white p-4 rounded shadow">
        <h2 className="text-sm font-semibold mb-2">판매자 정보</h2>
        <div className="text-xs">쿠팡파트너</div>
      </div>
    </div>
  );
}
