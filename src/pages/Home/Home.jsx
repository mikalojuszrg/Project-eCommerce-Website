import { getUniqueArrayItems } from "../../utils/array";
import styled from "styled-components";
import ProductCategory from "./ProductCategory";
import { useProducts } from "../../hooks/products";
import { screenSize } from "../../consts/meidiaQueries";

const Home = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || [];

  const uniqueCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );
  const categories = uniqueCategories.map((category) => ({
    name: category,
    image: products.find((product) => product.type === category).picUrl || "",
  }));

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return "Products missing";
  }

  return (
    <Container>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory
            key={category.name}
            name={category.name}
            image={category.image[0]}
          />
        ))}
      </ProductContainer>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const ProductContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
