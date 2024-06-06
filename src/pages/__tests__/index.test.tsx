import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../index";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);
    const heading = screen.getByText("Marvel Characters");
    expect(heading).toBeInTheDocument();
  });
});
