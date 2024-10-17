interface Cart {
  cart_id: string;
  items: CartItem[];
  summary: CartSummary;
}

interface CartItem {
  product: Product;
  unit: ProductUnit;
  quantity: number;
  total_list_price: number;
  total_sale_price: number;
  created_at: string;
}

interface Product {
  product_id: string;
  name: string;
  description: string;
}

interface ProductUnit {
  sku: string;
  list_price: number;
  sale_price: number;
  size: string | null;
  color: string;
  stock: number;
  image_url: string;
}

interface CartSummary {
  subtotal: number;
  discount: number;
  discount_code: string | null;
  shipping: number;
  total: number;
}

export type { Cart, CartItem, Product, ProductUnit, CartSummary };
