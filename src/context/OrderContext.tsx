import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Order, CartItem } from "../types";

interface OrderContextType {
  orders: Order[];
  createOrder: (cartItems: CartItem[], totalAmount: number) => string;
  getOrderById: (id: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const createOrder = (cartItems: CartItem[], totalAmount: number): string => {
    const orderId = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;

    const newOrder: Order = {
      id: orderId,
      items: cartItems.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      totalAmount,
      status: "processing",
      orderDate: new Date().toISOString(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    return orderId;
  };

  const getOrderById = (id: string): Order | undefined => {
    return orders.find((order) => order.id === id);
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  );
};
