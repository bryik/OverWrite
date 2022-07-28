import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title lol", () => {
  render(<App />);
  const linkElement = screen.getByText(/OverWrite/i);
  expect(linkElement).toBeInTheDocument();
});
