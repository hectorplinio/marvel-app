import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "@components/Header";

describe("Header", () => {
  it("renders Marvel logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Marvel Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders heart icon with unselected state when favorite count is 0", () => {
    render(<Header />);
    const heartIcon = screen.getByAltText("Heart Icon");
    expect(heartIcon).toBeInTheDocument();
  });

  it("renders favorite count", () => {
    render(<Header />);
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
  });
});
