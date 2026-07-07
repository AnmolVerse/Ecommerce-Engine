import { createContext, useContext, useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;

  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
}
interface OrderContextType {
  orders: OrderItem[];
  addOrder: (items: OrderItem[]) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);

export function OrderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orders, setOrders] = useState<OrderItem[]>(() => {
    const savedOrders = localStorage.getItem("orders");

    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const addOrder = (items: OrderItem[]) => {
    const updatedOrders = [...orders, ...items];

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrders must be used inside OrderProvider"
    );
  }

  return context;
}