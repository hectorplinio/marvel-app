import React from "react";
import { render, screen } from "@testing-library/react";
import { Layout } from "@components/Layout";
import { FavoritesProvider } from "@contexts/FavoritesContext";

describe("Layout", () => {
  it("renders Header", () => {
    render(
      <FavoritesProvider>
        <Layout>
          <div>Content</div>
        </Layout>
      </FavoritesProvider>,
    );
    const header = screen.getByAltText("Marvel Logo");
    expect(header).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <FavoritesProvider>
        <Layout>
          <div data-testid="content">Content</div>
        </Layout>
      </FavoritesProvider>,
    );
    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
  });
});
