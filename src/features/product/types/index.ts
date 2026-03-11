// Feature-specific component props
export interface ProductCardProps {
  product: {
    name: string;
    originalPrice: number;
    discountRate: number;
    finalPrice: number;
    rating: number;
    reviewCount: number;
    badges: string[];
    imageUrl: string;
    isWished: boolean;
  };
}

export interface ProductListPageProps {
  products: React.ReactNode[];
  filters: React.ReactNode;
  sortLabel: string;
  totalCount: number;
}

export interface ProductDetailPageProps {
  product: {
    name: string;
    badges: string[];
    originalPrice: number;
    discountRate: number;
    finalPrice: number;
    images: string[];
  };
  selectedOption: React.ReactNode;
  quantity: number;
  isWished: boolean;
  onWishToggle: () => void;
  onQuantityChange: (newQty: number) => void;
}

export * from "@/src/entities/product/types";
