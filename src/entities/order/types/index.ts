export interface ShippingInfo {
  name: string;
  address: string;
  phone: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export interface Order {
  orderNumber: string;
  items: OrderItem[];
  totalAmount: number;
  shippingInfo: ShippingInfo;
  estimatedDelivery: string;
}

export type PaymentMethod =
  | "카드"
  | "계좌이체"
  | "카카오페이"
  | "네이버페이"
  | "토스페이";
