import styled from "styled-components";
import { inputBgColor, inputColor } from "../../consts/Colors";

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  color: ${inputColor};
  background-color: ${inputBgColor};
  padding: 10px 14px;
  border: 0;
  outline: 0;
`;
