import styled from "styled-components";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { screenSize } from "../../consts/meidiaQueries";
import CartItem from "../Cart/CartItem";
import PaymentForm from "./PaymentForm";
import { useNavigate } from "react-router";
import { CART_PATH } from "../../routes/const";

const Checkout = () => {
  const { cartItems, handleUpdateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems.length) {
      navigate(CART_PATH);
    }
  }, [cartItems.length, navigate]);

  return (
    <Container>
      <PaymentContainer>
        <PaymentForm />
      </PaymentContainer>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleIncreaseQuantity={() =>
              handleUpdateQuantity(product.id, "increase")
            }
            handleDecreaseQuantity={() => handleUpdateQuantity(product.id)}
          />
        ))}
      </CartContainer>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  max-width: ${screenSize.laptop};
  margin: 0 auto;
  display: flex;
  gap: 32px;
`;

const PaymentContainer = styled.div`
  width: 60%;
`;

const CartContainer = styled.div`
  width: 40%;
  background-color: #ffffff;
  margin-bottom: 24px;
`;
