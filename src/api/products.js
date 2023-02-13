import axios from "axios";

const PRODUCTS_API = "https://testapi.io/api/lukasnvc/resource/NewEshop";

const tranformData = (products) => {
  return products.map((product) => ({
    ...product,
    picUrl: JSON.parse(product.picUrl),
    size: JSON.parse(product.size),
  }));
};

export const fetchProducts = () => {
  return axios
    .get(PRODUCTS_API)
    .then((response) => tranformData(response.data.data));
};
