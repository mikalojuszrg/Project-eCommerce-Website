import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { useProducts } from "../../hooks/products";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { generatePath, Link } from "react-router-dom";
import { PRODUCT_PATH } from "../../routes/const";
import { lightBorderColor } from "../../consts/Colors";

const EnhancedSearchBar = () => {
  const [search, setSearch] = useState("");
  const { data } = useProducts();
  const products = (data || []).slice(0, 5);
  const filteredItems = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover
      isOpen={search}
      positions={["top", "bottom", "left", "right"]}
      content={
        <Container>
          {filteredItems.length ? (
            filteredItems.map((product) => (
              <p key={product.id} onClick={() => setSearch("")}>
                <Link
                  to={generatePath(PRODUCT_PATH, {
                    category: product.type,
                    productId: product.id,
                  })}
                >
                  {product.name}
                </Link>
              </p>
            ))
          ) : (
            <p>Item not found.</p>
          )}
        </Container>
      }
    >
      <div>
        <SearchBar value={search} setValue={setSearch} />
      </div>
    </Popover>
  );
};
export default EnhancedSearchBar;

const Container = styled.div`
  max-height: 135px;
  background-color: #ffffff;
  border: 1px solid ${lightBorderColor};
  border-radius: 5px;
  width: 205px;

  p {
    padding: 8px;
    font-size: 13px;
  }
`;
