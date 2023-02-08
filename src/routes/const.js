import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const HOME_PATH = "/";
export const PRODUCT_LIST_PATH = `${HOME_PATH}category/:category`;
export const PRODUCT_PATH = `${PRODUCT_LIST_PATH}/:productId`;
export const LOGIN = "/login";
export const CART = "/cart";
export const REGISTER = "/register";

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

    { path: CART, Component: Cart },

    { path: LOGIN, Component: Login },

    { path: REGISTER, Component: Register },
  ],
};
