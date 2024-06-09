import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "../components/Layout";

describe("Layout", () => {
  it("renders Header", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>,
    );
    const header = screen.getByAltText("Marvel Logo");
    expect(header).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <Layout>
        <div data-testid="content">Content</div>
      </Layout>,
    );
    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
  });
});
