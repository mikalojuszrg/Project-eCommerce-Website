import SearchBar from "./SearchBar";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("SearchBar component", () => {
  it("renders the search bar correctly", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox"); // input element
    const searchInput = screen.getByPlaceholderText("Search"); // placeholder

    expect(searchBar).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("has the correct styling", () => {
    render(<SearchBar />);
    const searchBar = screen.getByRole("textbox");

    expect(searchBar).toHaveStyle(`padding: 8px 40px`);
    expect(searchBar).toHaveStyle(`border-radius: 5px`);
    expect(searchBar).toHaveStyle(`background-color: #f5f3f3`);
  });
});
