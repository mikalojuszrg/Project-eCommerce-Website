import Button from "./Button";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("Button component", () => {
  it("renders the children correctly", () => {
    render(<Button>Click me</Button>);
    const buttonText = screen.getByText("Click me");
    expect(buttonText).toBeInTheDocument();
  });
});
