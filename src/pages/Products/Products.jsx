import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();
  return <div>Products {category}</div>;
};

export default Products;
