import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../utils/string";

const Products = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  const categoryProducts = products.filter(
    (product) => product.type === category
  );

  return (
    <ProductsContainer>
      {categoryProducts.map((product) => (
        <ProductItem key={product.id}>
          <img src={product.picUrl[0]} alt="product" />

          <ProductName>
            {capitalizeFirstLetter(product.name.toLowerCase())}
          </ProductName>
        </ProductItem>
      ))}
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* gap: 1rem; */
  padding: 40px;
`;

const ProductItem = styled.div`
  margin: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  img {
    flex: 1;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductName = styled.p`
  /* margin: 0; */
`;
