import { useQuery } from "react-query";
import { fetchProducts } from "../api/products";

const PRODUCTS = "PRODUCTS";

export const useProducts = () => {
  return useQuery(PRODUCTS, fetchProducts);
};
