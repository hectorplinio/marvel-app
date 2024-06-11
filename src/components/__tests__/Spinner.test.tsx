import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Spinner } from "../Spinner";

describe("Spinner component", () => {
  it("renders without crashing", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole("img", { hidden: true });
    expect(spinnerElement).toBeInTheDocument();
  });

  it("has the correct styles applied", () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole("img", { hidden: true });
    expect(spinnerElement).toHaveStyle("display: inline-block");
  });
});
