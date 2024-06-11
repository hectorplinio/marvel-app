import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchBar } from "../SearchBar";

describe("SearchBar", () => {
  it("renders the search bar", () => {
    render(<SearchBar onSearch={jest.fn()} isLoading={false} value="" />);
    const inputElement = screen.getByPlaceholderText(/search a character/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onSearch with the correct query after debounce", async () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} value="" />);

    const inputElement = screen.getByPlaceholderText(/search a character/i);
    fireEvent.change(inputElement, { target: { value: "spider-man" } });

    await waitFor(
      () => {
        expect(mockOnSearch).toHaveBeenCalledWith("spider-man");
      },
      { timeout: 1600 },
    );
  });

  it("debounces the search input correctly", async () => {
    jest.useFakeTimers();
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} value="" />);

    const inputElement = screen.getByPlaceholderText(/search a character/i);
    fireEvent.change(inputElement, { target: { value: "hulk" } });

    jest.advanceTimersByTime(1400);
    expect(mockOnSearch).not.toHaveBeenCalled();

    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith("hulk");
    });

    jest.useRealTimers();
  });

  it("clears the previous timeout when input changes", async () => {
    jest.useFakeTimers();
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} isLoading={false} value="" />);

    const inputElement = screen.getByPlaceholderText(/search a character/i);
    fireEvent.change(inputElement, { target: { value: "iron" } });

    jest.advanceTimersByTime(1000);

    fireEvent.change(inputElement, { target: { value: "iron man" } });

    jest.advanceTimersByTime(1400);
    expect(mockOnSearch).not.toHaveBeenCalled();

    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith("iron man");
    });

    jest.useRealTimers();
  });
});
