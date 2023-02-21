import styled from "styled-components";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import { useProducts } from "../../hooks/products";
import { getUniqueArrayItems } from "../../utils/array";
import { Link, generatePath } from "react-router-dom";
import { lightBorderColor } from "../../consts/Colors";
import { PRODUCT_LIST_PATH } from "../../routes/const";

const CategoriesButton = () => {
  const { data } = useProducts();
  const products = data || [];
  const [hovered, setHovered] = useState(false);

  const uniqueCategories = getUniqueArrayItems(
    products.map((product) => product.type)
  );

  return (
    <Popover
      isOpen={hovered}
      positions={["top", "bottom", "left", "right"]}
      content={
        <ContentContainer onMouseLeave={() => setHovered(false)}>
          {uniqueCategories.map((category) => (
            <p key={category} onClick={() => setHovered(false)}>
              <Link to={generatePath(PRODUCT_LIST_PATH, { category })}>
                {category}
              </Link>
            </p>
          ))}
        </ContentContainer>
      }
    >
      <Container onMouseEnter={() => setHovered(true)}>Categories</Container>
    </Popover>
  );
};

export default CategoriesButton;

const Container = styled.p`
  font-size: 19px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  max-height: 135px;
  background-color: #ffffff;
  border: 1px solid ${lightBorderColor};
  border-radius: 5px;
  width: 205px;
  margin-left: 24px;
  margin-top: 8px;

  p {
    padding: 8px;
    font-size: 13px;
    text-transform: uppercase;
  }
`;
