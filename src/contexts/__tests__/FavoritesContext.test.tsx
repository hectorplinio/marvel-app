import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "../FavoritesContext";

const TestComponent = () => {
  const { favorites, toggleFavorite, showFavorites, toggleShowFavorites } =
    useFavorites();

  return (
    <div>
      <button onClick={() => toggleFavorite("1")}>Toggle Favorite</button>
      <button onClick={toggleShowFavorites}>Toggle Show Favorites</button>
      <div data-testid="favorites">{favorites.join(", ")}</div>
      <div data-testid="showFavorites">{showFavorites.toString()}</div>
    </div>
  );
};

describe("FavoritesContext", () => {
  it("toggles favorite", () => {
    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    fireEvent.click(screen.getByText("Toggle Favorite"));
    expect(screen.getByTestId("favorites").textContent).toBe("1");
  });

  it("toggles showFavorites", () => {
    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    fireEvent.click(screen.getByText("Toggle Show Favorites"));
    expect(screen.getByTestId("showFavorites").textContent).toBe("true");
  });
});
