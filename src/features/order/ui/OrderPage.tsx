import { OrderPageProps } from "@/src/features/order/types";

export default function OrderPage({
  shippingInfo,
  orderItems,
  pricing,
  onPay,
}: OrderPageProps) {
  return (
    <div className="bg-pageBg min-h-screen p-4">
      <div className="bg-white p-4 rounded shadow mb-4">{shippingInfo}</div>
      <div className="bg-white p-4 rounded shadow mb-4">{orderItems}</div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="text-sm flex justify-between">
          <span>상품 합계</span>
          <span>₩{pricing.itemTotal.toLocaleString()}</span>
        </div>
        <div className="text-sm flex justify-between">
          <span>할인</span>
          <span className="text-red-500">
            -₩{pricing.discount.toLocaleString()}
          </span>
        </div>
        <div className="text-sm flex justify-between">
          <span>배송비</span>
          <span>₩{pricing.delivery.toLocaleString()}</span>
        </div>
        <div className="mt-2 text-lg font-bold flex justify-between">
          <span>총 합계</span>
          <span className="text-red-500">
            ₩{pricing.finalTotal.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white shadow md:relative md:bottom-auto">
        <button
          onClick={onPay}
          className="w-full bg-red-500 text-white py-3 rounded text-center"
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
