import styled from "styled-components";
import { primaryButtonColor } from "../../consts/Colors";
import { primaryDarkButtonColor } from "../../consts/Colors";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 17px 30px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: ${primaryDarkButtonColor};
  }
`;

const Button = ({ children }) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};
export default Button;
