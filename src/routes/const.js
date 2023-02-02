import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";

export const HOME_PATH = "/";
export const PRODUCT_LIST_PATH = `${HOME_PATH}:category`;
export const PRODUCT_PATH = `${PRODUCT_LIST_PATH}/:productId`;
// export const PRODUCT_PATH = `/:category/:id`;

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PRODUCT_LIST_PATH,
      Component: Products,
    },
    {
      path: PRODUCT_PATH,
      Component: Product,
    },
  ],
};
