import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders with default title", () => {
    render(<Header />);

    expect(screen.getByText("React Counter App")).toBeInTheDocument();
  });

  it("renders with custom title", () => {
    const customTitle = "Custom Counter Title";
    render(<Header title={customTitle} />);

    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it("renders as h1 element", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("React Counter App");
  });
});
