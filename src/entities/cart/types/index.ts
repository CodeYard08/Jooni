export interface CartItem {
  id: string;
  productId: string;
  name: string;
  option?: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export interface Coupon {
  code: string;
  discountAmount: number;
}
