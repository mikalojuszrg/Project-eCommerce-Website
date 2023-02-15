import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("Cart items", []);

  const handleAddToCart = (cartItem) => {
    const hasEqualId = (cItem) => cItem.id === cartItem.id;
    const alreadyInCartItem = cartItems.find(hasEqualId);
    if (alreadyInCartItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          hasEqualId(item) ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...cartItem, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
