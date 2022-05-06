import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "../components/App";

test("Test name App", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const element = screen.getByText(/owen wilson's WOW/i);
  expect(element).toBeInTheDocument();
});

test("Test place holder", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const element = screen.getByPlaceholderText(/nombre de la película/i);
  expect(element).toBeInTheDocument();
});

test("Test reset", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const element = screen.getByText(/reset/i);
  expect(element).toBeInTheDocument();
});
