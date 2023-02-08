import styled from "styled-components";
import { primaryButtonColor } from "../../consts/Colors";
import { primaryDarkButtonColor } from "../../consts/Colors";

const PrimaryButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${primaryButtonColor};
  padding: 14px 30px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: ${primaryDarkButtonColor};
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

const Button = ({ children, ...rest }) => {
  return <PrimaryButton {...rest}>{children}</PrimaryButton>;
};
export default Button;
