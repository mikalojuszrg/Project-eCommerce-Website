import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const tranformData = (products) => {
    return products.map((product) => ({
      ...product,
      picUrl: JSON.parse(product.picUrl),
      size: JSON.parse(product.size),
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://testapi.io/api/lukasnvc/resource/NewEshop")
      .then((response) => {
        const transformedData = tranformData(response.data.data);
        setProducts(transformedData);
        setIsLoading(false);
      })
      .catch((error) => console.error("Products", error));
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
