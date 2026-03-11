import { OrderCompletePageProps } from "@/src/features/order/types";

export default function OrderCompletePage({
  orderNumber,
  estimatedDelivery,
  orderItems,
  totalAmount,
}: OrderCompletePageProps) {
  return (
    <div className="bg-pageBg min-h-screen p-4 text-center">
      <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-xl font-semibold mb-2">주문이 완료되었습니다</h1>
      <div className="text-sm mb-1">주문번호: {orderNumber}</div>
      <div className="text-lg font-bold mb-4">
        {estimatedDelivery} 도착 예정
      </div>
      <div className="bg-white p-4 rounded shadow mb-4">{orderItems}</div>
      <div className="text-lg font-bold mb-4">
        총 결제금액 ₩{totalAmount.toLocaleString()}
      </div>
      <div className="flex gap-2 justify-center">
        <button className="flex-1 bg-gray-200 py-2 rounded">
          주문내역 보기
        </button>
        <button className="flex-1 bg-red-500 text-white py-2 rounded">
          쇼핑 계속하기
        </button>
      </div>
    </div>
  );
}
