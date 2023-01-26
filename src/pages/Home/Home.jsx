import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { getUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";

const Home = () => {
  const { products } = useContext(ProductContext);
  const uniqueCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  const categories = uniqueCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl || "",
  }));

  return (
    <div>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory
            key={category.name}
            name={category.name}
            image={JSON.parse(category.image)[0]}
          />
        ))}
      </ProductContainer>
    </div>
  );
};
export default Home;

const ProductContainer = styled.div`
  display: flex;
  gap: 16x;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fafafa;
`;
