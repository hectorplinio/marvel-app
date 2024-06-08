import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "@components/Card";

describe("Card component", () => {
  const mockCharacter = {
    id: "1",
    name: "Spider-Man",
    avatar_url: "http://example.com/spiderman.jpg",
    isFavorite: false,
    onFavoriteToggle: jest.fn(),
  };

  it("renders the character name", () => {
    render(<Card {...mockCharacter} />);
    expect(screen.getByText("Spider-Man")).toBeInTheDocument();
  });

  it("renders the character image", () => {
    render(<Card {...mockCharacter} />);
    const imgElement = screen.getByAltText("Spider-Man");
    expect(imgElement).toBeInTheDocument();
  });

  it("renders the favorite button", () => {
    render(<Card {...mockCharacter} />);
    const favoriteButton = screen.getByRole("button");
    expect(favoriteButton).toBeInTheDocument();
  });

  it("calls onFavoriteToggle when the favorite button is clicked", () => {
    render(<Card {...mockCharacter} />);
    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);
    expect(mockCharacter.onFavoriteToggle).toHaveBeenCalled();
  });
});
