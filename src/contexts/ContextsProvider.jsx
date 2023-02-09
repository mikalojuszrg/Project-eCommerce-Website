import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";

const ContextsProvider = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>{children}</ProductProvider>
    </UserProvider>
  );
};

export default ContextsProvider;
