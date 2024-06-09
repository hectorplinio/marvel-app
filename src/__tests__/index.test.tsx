import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FavoritesProvider } from "@contexts/FavoritesContext";
import Home from "@pages/index";

describe("Home", () => {
  it("renders the heading", () => {
    render(
      <FavoritesProvider>
        <Home />
      </FavoritesProvider>,
    );
  });
});
