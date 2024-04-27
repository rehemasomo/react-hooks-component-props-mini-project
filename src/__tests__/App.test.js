import { render } from "@testing-library/react";
import App from " ./src/components/App.js";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  
  const headerElement = container.querySelector(".App header");
  if (headerElement) {
    expect(headerElement).toBeInTheDocument();
  }

  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});
