import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import App from "../App";

describe("Counter App Integration Tests", () => {
  describe("User Workflows", () => {
    test("user can perform a complete counting session", () => {
      render(<App />);

      // Starting state
      expect(screen.getByText("0")).toBeInTheDocument();

      // User increments 5 times
      const incrementButton = screen.getByText("+");
      for (let i = 0; i < 5; i++) {
        fireEvent.click(incrementButton);
      }
      expect(screen.getByText("5")).toBeInTheDocument();

      // User decrements 2 times
      const decrementButton = screen.getByText("-");
      fireEvent.click(decrementButton);
      fireEvent.click(decrementButton);
      expect(screen.getByText("3")).toBeInTheDocument();

      // User resets
      const resetButton = screen.getByText("Reset");
      fireEvent.click(resetButton);
      expect(screen.getByText("0")).toBeInTheDocument();

      // User goes negative
      fireEvent.click(decrementButton);
      fireEvent.click(decrementButton);
      expect(screen.getByText("-2")).toBeInTheDocument();

      // User resets again
      fireEvent.click(resetButton);
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    test("stress test - rapid clicking works correctly", () => {
      render(<App />);

      const incrementButton = screen.getByText("+");
      const decrementButton = screen.getByText("-");

      // Rapid increment clicking
      for (let i = 0; i < 20; i++) {
        fireEvent.click(incrementButton);
      }
      expect(screen.getByText("20")).toBeInTheDocument();

      // Rapid decrement clicking
      for (let i = 0; i < 30; i++) {
        fireEvent.click(decrementButton);
      }
      expect(screen.getByText("-10")).toBeInTheDocument();

      // Reset should still work
      const resetButton = screen.getByText("Reset");
      fireEvent.click(resetButton);
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    test("alternating increment and decrement pattern", () => {
      render(<App />);

      const incrementButton = screen.getByText("+");
      const decrementButton = screen.getByText("-");

      // Pattern: +1, -1, +1, -1, +1 = should end at 1
      fireEvent.click(incrementButton); // 1
      fireEvent.click(decrementButton); // 0
      fireEvent.click(incrementButton); // 1
      fireEvent.click(decrementButton); // 0
      fireEvent.click(incrementButton); // 1

      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  describe("Accessibility Tests", () => {
    test("buttons are accessible via keyboard navigation", () => {
      render(<App />);

      const incrementButton = screen.getByText("+");
      const decrementButton = screen.getByText("-");
      const resetButton = screen.getByText("Reset");

      // Buttons should be focusable
      incrementButton.focus();
      expect(document.activeElement).toBe(incrementButton);

      decrementButton.focus();
      expect(document.activeElement).toBe(decrementButton);

      resetButton.focus();
      expect(document.activeElement).toBe(resetButton);
    });

    test("counter value is readable by screen readers", () => {
      render(<App />);

      const counterValue = screen.getByText("0");

      // Counter value should be in the document and accessible
      expect(counterValue).toBeInTheDocument();
      expect(counterValue.tagName).toBe("SPAN");
    });
  });

  describe("Edge Cases", () => {
    test("handles very large positive numbers", () => {
      render(<App />);

      const incrementButton = screen.getByText("+");

      // Increment to a large number
      for (let i = 0; i < 1000; i++) {
        fireEvent.click(incrementButton);
      }

      expect(screen.getByText("1000")).toBeInTheDocument();

      // Should still be able to reset
      const resetButton = screen.getByText("Reset");
      fireEvent.click(resetButton);
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    test("handles very large negative numbers", () => {
      render(<App />);

      const decrementButton = screen.getByText("-");

      // Decrement to a large negative number
      for (let i = 0; i < 999; i++) {
        fireEvent.click(decrementButton);
      }

      expect(screen.getByText("-999")).toBeInTheDocument();

      // Should still be able to reset
      const resetButton = screen.getByText("Reset");
      fireEvent.click(resetButton);
      expect(screen.getByText("0")).toBeInTheDocument();
    });
  });
});
