import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

export const HOME_PATH = "/";
export const PRODUCT_LIST_PATH = `${HOME_PATH}:category`;

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: PRODUCT_LIST_PATH,
    Component: Products,
  },
];
