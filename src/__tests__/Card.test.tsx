import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "@components/Card";

describe("Card component", () => {
  const mockCharacter = {
    id: "1",
    name: "Spider-Man",
    avatar_url: "http://example.com/spiderman.jpg",
    is_favorited: false,
  };
  const mockOnFavoriteToggle = jest.fn();

  it("renders the character name", () => {
    render(
      <Card
        character={mockCharacter}
        onFavoriteToggle={mockOnFavoriteToggle}
      />,
    );
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
  });

  it("renders the character image", () => {
    render(
      <Card
        character={mockCharacter}
        onFavoriteToggle={mockOnFavoriteToggle}
      />,
    );
    const imgElement = screen.getByAltText("Spider-Man");
    expect(imgElement).toBeInTheDocument();
  });

  it("renders the favorite button", () => {
    render(
      <Card
        character={mockCharacter}
        onFavoriteToggle={mockOnFavoriteToggle}
      />,
    );
    const favoriteButton = screen.getByRole("button");
    expect(favoriteButton).toBeInTheDocument();
  });

  it("calls onFavoriteToggle when the favorite button is clicked", () => {
    render(
      <Card
        character={mockCharacter}
        onFavoriteToggle={mockOnFavoriteToggle}
      />,
    );
    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);
    expect(mockOnFavoriteToggle).toHaveBeenCalled();
  });
});
