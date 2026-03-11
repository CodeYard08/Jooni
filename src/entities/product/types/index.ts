export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountRate: number;
  finalPrice: number;
  rating: number;
  reviewCount: number;
  badges: string[];
  imageUrl: string;
}

export interface ProductDetail extends Product {
  description: string;
  options?: Record<string, string[]>; // e.g. color: ["red","blue"]
}

export type Badge = "로켓배송" | "오늘출고" | "무료반품" | "최저가" | string;
