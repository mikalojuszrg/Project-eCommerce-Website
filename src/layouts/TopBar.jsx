import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import { lightBorderColor } from "../consts/Colors";
import { CART_PATH, HOME_PATH } from "../routes/const";

const TopBar = () => {
  return (
    <Container>
      <NavigationItem>Categories</NavigationItem>
      <Logo as={Link} to={HOME_PATH}>
        POHSE
      </Logo>
      <ItemContainer>
        <SearchBar />
        <Link to={CART_PATH}>
          <FaShoppingCart />
        </Link>
      </ItemContainer>
    </Container>
  );
};

export default TopBar;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBorderColor};
  background-color: #ffffff;
`;

const NavigationItem = styled.div`
  font-size: 19px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  color: inherit;
`;
