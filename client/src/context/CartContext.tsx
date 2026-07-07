import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Omit<CartItem, "quantity">
  ) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (
    product: Omit<CartItem, "quantity">
  ) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
   
    const clearCart = () => {
  setCartItems([]);
};
  return (
    <CartContext.Provider
     value={{
  cartItems,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}