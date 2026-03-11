// Feature-specific component props
export interface CartPageProps {
  cartItems: React.ReactNode[];
  selectedItems: string[];
  couponCode: string;
  appliedCoupon?: { code: string; discountAmount: number };
  onCouponChange: (code: string) => void;
  onApplyCoupon: () => void;
  onSelectAll: () => void;
  onOrder: () => void;
}

export * from "@/src/entities/cart/types";
