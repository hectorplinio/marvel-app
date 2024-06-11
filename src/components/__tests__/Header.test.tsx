import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../Header";
import { FavoritesProvider } from "../../contexts/FavoritesContext";

describe("Header", () => {
  it("renders Marvel logo", () => {
    render(
      <FavoritesProvider>
        <Header />
      </FavoritesProvider>,
    );
    const logo = screen.getByAltText("Marvel Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders heart icon with unselected state when favorite count is 0", () => {
    render(
      <FavoritesProvider>
        <Header />
      </FavoritesProvider>,
    );
    const heartIcon = screen.getByAltText("Heart Icon");
    expect(heartIcon).toBeInTheDocument();
  });

  it("renders favorite count", () => {
    render(
      <FavoritesProvider>
        <Header />
      </FavoritesProvider>,
    );
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
  });
});
