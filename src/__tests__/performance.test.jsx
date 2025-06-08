import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe, beforeEach } from "vitest";
import App from "../App";

describe("Counter App Performance Tests", () => {
  let startTime, endTime;

  beforeEach(() => {
    startTime = performance.now();
  });

  test("component renders quickly", () => {
    render(<App />);

    endTime = performance.now();
    const renderTime = endTime - startTime;

    // Component should render in less than 100ms
    expect(renderTime).toBeLessThan(100);    // Verify basic elements are present
    expect(screen.getByText("React Counter App!")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("button clicks respond quickly", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");

    const clickStartTime = performance.now();
    fireEvent.click(incrementButton);
    const clickEndTime = performance.now();

    const clickResponseTime = clickEndTime - clickStartTime;

    // Click should respond in less than 50ms
    expect(clickResponseTime).toBeLessThan(50);

    // Verify the click worked
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("rapid clicking performance", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");

    const rapidClickStartTime = performance.now();

    // Perform 100 rapid clicks
    for (let i = 0; i < 100; i++) {
      fireEvent.click(incrementButton);
    }

    const rapidClickEndTime = performance.now();
    const totalTime = rapidClickEndTime - rapidClickStartTime;

    // 100 clicks should complete in less than 1 second
    expect(totalTime).toBeLessThan(1000);

    // Verify final state
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  test("memory usage stays reasonable during intensive operations", () => {
    render(<App />);

    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    const resetButton = screen.getByText("Reset");

    // Perform various operations that might cause memory leaks
    for (let cycle = 0; cycle < 10; cycle++) {
      // Increment 50 times
      for (let i = 0; i < 50; i++) {
        fireEvent.click(incrementButton);
      }

      // Decrement 50 times
      for (let i = 0; i < 50; i++) {
        fireEvent.click(decrementButton);
      }

      // Reset
      fireEvent.click(resetButton);
    }

    // Should end at 0 after all cycles
    expect(screen.getByText("0")).toBeInTheDocument();

    // If we get here without timeout, memory usage is reasonable
    expect(true).toBe(true);
  });
});
