import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../index";
import { FavoritesProvider } from "@contexts/FavoritesContext";

describe("Home", () => {
  it("renders the heading", () => {
    render(
      <FavoritesProvider>
        <Home />
      </FavoritesProvider>,
    );
  });
});
