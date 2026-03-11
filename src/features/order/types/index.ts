// Feature-specific component props
export interface OrderPageProps {
  shippingInfo: React.ReactNode;
  orderItems: React.ReactNode;
  pricing: {
    itemTotal: number;
    discount: number;
    delivery: number;
    finalTotal: number;
  };
  onPay: () => void;
}

export interface OrderCompletePageProps {
  orderNumber: string;
  estimatedDelivery: string;
  orderItems: React.ReactNode;
  totalAmount: number;
}

export * from "@/src/entities/order/types";
