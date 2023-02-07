import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";
import { screenSize } from "../../consts/meidiaQueries";
import Button from "../../components/Button/Button";

const Cart = () => {
  const { products } = useContext(ProductContext);

  const cartProducts = products.slice(0, 2);
  console.log(cartProducts);

  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Items are reserved for 30 minutes</p>
      </Header>
      <CartContainer>
        {cartProducts.map((product) => (
          <CartItem key={product.id}>
            <img src={product.picUrl[0]} alt="product" />
            <div>
              <CartItemPrice>
                {euroSymbol}
                {product.price}
              </CartItemPrice>
              <p>{product.name}</p>
              <CartItemColor>{product.color}</CartItemColor>
            </div>
          </CartItem>
        ))}
      </CartContainer>
      <ButtonContainer>
        <Button>CHECKOUT</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const CartItem = styled.div`
  display: flex;
  img {
    margin-right: 8px;
    object-fit: contain;
    width: 120px;
  }
`;

const CartContainer = styled.div`
  padding: 24px 32px 0px 0px;
  background-color: #ffffff;
  margin-bottom: 24px;
`;

const CartItemPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const CartItemColor = styled.p`
  font-weight: 300;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
