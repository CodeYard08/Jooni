import { CartPageProps } from "@/src/features/cart/types";

export default function CartPage({
  cartItems,
  selectedItems,
  couponCode,
  appliedCoupon,
  onCouponChange,
  onApplyCoupon,
  onSelectAll,
  onOrder,
}: CartPageProps) {
  return (
    <div className="bg-pageBg min-h-screen p-4">
      <div className="overflow-x-auto">
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="p-2">
                <input type="checkbox" onChange={onSelectAll} />
              </th>
              <th className="p-2 text-left">상품</th>
              <th className="p-2">수량</th>
              <th className="p-2">가격</th>
              <th className="p-2">삭제</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      </div>
      <div className="mt-4 bg-white p-4 rounded shadow max-w-md ml-auto">
        <div className="mb-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => onCouponChange(e.target.value)}
            placeholder="쿠폰 코드 입력"
            className="w-full border p-2 text-sm"
          />
          <button
            onClick={onApplyCoupon}
            className="mt-1 w-full bg-gray-200 py-2 text-sm rounded"
          >
            적용
          </button>
        </div>
        <div className="text-sm flex justify-between">
          <span>상품 합계</span>
          <span>₩0</span>
        </div>
        {appliedCoupon && (
          <div className="text-sm flex justify-between">
            <span>쿠폰 할인</span>
            <span className="text-red-500">
              -₩{appliedCoupon.discountAmount}
            </span>
          </div>
        )}
        <div className="text-sm flex justify-between">
          <span>배송비</span>
          <span>무료</span>
        </div>
        <div className="mt-2 text-lg font-bold flex justify-between">
          <span>총 합계</span>
          <span className="text-red-500">₩0</span>
        </div>
        <button
          onClick={onOrder}
          className="mt-4 w-full bg-red-500 text-white py-3 rounded text-center"
        >
          주문하기
        </button>
      </div>
    </div>
  );
}
