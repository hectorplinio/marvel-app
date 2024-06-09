import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "@components/Card";
import { FavoritesProvider } from "@contexts/FavoritesContext";

describe("Card component", () => {
  const mockCharacter = {
    id: "1",
    name: "Spider-Man",
    avatar_url: "http://example.com/spiderman.jpg",
    is_favorited: false,
  };

  it("renders the character name", () => {
    render(
      <FavoritesProvider>
        <Card character={mockCharacter} />
      </FavoritesProvider>,
    );
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
  });

  it("renders the character image", () => {
    render(
      <FavoritesProvider>
        <Card character={mockCharacter} />
      </FavoritesProvider>,
    );
    const imgElement = screen.getByAltText("Spider-Man");
    expect(imgElement).toBeInTheDocument();
  });

  it("renders the favorite button", () => {
    render(
      <FavoritesProvider>
        <Card character={mockCharacter} />
      </FavoritesProvider>,
    );
    const favoriteButton = screen.getByRole("button");
    expect(favoriteButton).toBeInTheDocument();
  });

  it("toggles the favorite status when the favorite button is clicked", () => {
    render(
      <FavoritesProvider>
        <Card character={mockCharacter} />
      </FavoritesProvider>,
    );
    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    expect(screen.getByAltText("Favorite")).toHaveAttribute(
      "src",
      "/selected_heart.png",
    );

    fireEvent.click(favoriteButton);

    expect(screen.getByAltText("Favorite")).toHaveAttribute(
      "src",
      "/unselected_heart.png",
    );
  });
});
