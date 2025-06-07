import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import App from "./App";

describe("App Component", () => {
  test("renders the counter app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/React Counter App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders initial counter value of 0", () => {
    render(<App />);
    const counterValue = screen.getByText("0");
    expect(counterValue).toBeInTheDocument();
  });

  test("renders all three buttons", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    const resetButton = screen.getByText("Reseter");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  test("increments counter when + button is clicked", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const counterValue = screen.getByText("0");

    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  test("decrements counter when - button is clicked", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    // First increment to 1
    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    // Then decrement back to 0
    fireEvent.click(decrementButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("allows counter to go into negative numbers", () => {
    render(<App />);

    const decrementButton = screen.getByText("-");

    fireEvent.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("resets counter to 0 when Reset button is clicked", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const resetButton = screen.getByText("Reset");

    // Increment counter multiple times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(screen.getByText("3")).toBeInTheDocument();

    // Reset the counter
    fireEvent.click(resetButton);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("resets negative counter to 0 when Reset button is clicked", () => {
    render(<App />);

    const decrementButton = screen.getByText("-");
    const resetButton = screen.getByText("Reset");

    // Decrement counter multiple times
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByText("-2")).toBeInTheDocument();

    // Reset the counter
    fireEvent.click(resetButton);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("multiple increment operations work correctly", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");

    // Click increment button 5 times
    for (let i = 0; i < 5; i++) {
      fireEvent.click(incrementButton);
    }

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("mixed increment and decrement operations work correctly", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    // +3, -1, +2, -1 = 3
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("buttons have correct CSS classes", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    const resetButton = screen.getByText("Reset");

    expect(incrementButton).toHaveClass("btn", "btn-increment");
    expect(decrementButton).toHaveClass("btn", "btn-decrement");
    expect(resetButton).toHaveClass("btn", "btn-reset");
  });

  test("counter value has correct CSS class", () => {
    render(<App />);

    const counterValue = screen.getByText("0");

    expect(counterValue).toHaveClass("counter-value");
  });
});
