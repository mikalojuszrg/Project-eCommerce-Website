import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

const ContextsProvider = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default ContextsProvider;
