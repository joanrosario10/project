export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  rating: number;
  specifications: Record<string, string>;
  reviews: Review[];
  videos:string[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  orderDate: string;
}

export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}
