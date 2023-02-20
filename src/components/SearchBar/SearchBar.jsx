import styled from "styled-components";
import { searchBgColor } from "../../consts/Colors";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, setValue }) => {
  return (
    <InputWrapper>
      <FaSearch />
      <Input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrapper>
  );
};

export default SearchBar;

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 12px;
    top: 10px;
  }
`;

const Input = styled.input`
  background-color: ${searchBgColor};
  border: 0;
  outline: 0;
  padding: 8px 40px;
  font-size: inherit;
  border-radius: 5px;
`;
