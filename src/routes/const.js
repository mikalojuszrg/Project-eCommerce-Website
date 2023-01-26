import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

const HOME_PATH = "/";
const PRODUCT_LIST = "/:category";

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: PRODUCT_LIST,
    Component: Products,
  },
];
