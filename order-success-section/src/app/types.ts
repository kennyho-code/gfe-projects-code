export interface Order {
  order_id: string;
  items: OrderItem[];
  summary: OrderSummary;
  shipping_details: ShippingDetails;
  payment_method: PaymentMethod;
}

export interface OrderItem {
  product: Product;
  unit: ProductUnit;
  quantity: number;
  total_list_price: number;
  total_sale_price: number;
  created_at: string;
}

export interface Product {
  product_id: string;
  name: string;
}

export interface ProductUnit {
  sku: string;
  list_price: number;
  sale_price: number;
  size: string | null;
  color: string;
  image_url: string;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  discount_code: string;
  shipping: number;
  total: number;
}

export interface ShippingDetails {
  address: Address;
  phone: string;
}

export interface Address {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  zip: number;
  country: string;
}

export interface PaymentMethod {
  type: string;
  last_4: string;
  exp_month: number;
  exp_year: number;
}
