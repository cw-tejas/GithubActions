import { describe, test, expect } from "vitest";
import { counterUtils } from "./counterUtils";

describe("Counter Utils", () => {
  describe("increment", () => {
    test("increments positive numbers", () => {
      expect(counterUtils.increment(5)).toBe(6);
      expect(counterUtils.increment(0)).toBe(1);
      expect(counterUtils.increment(99)).toBe(100);
    });

    test("increments negative numbers", () => {
      expect(counterUtils.increment(-5)).toBe(-4);
      expect(counterUtils.increment(-1)).toBe(0);
    });
  });

  describe("decrement", () => {
    test("decrements positive numbers", () => {
      expect(counterUtils.decrement(5)).toBe(4);
      expect(counterUtils.decrement(1)).toBe(0);
    });

    test("decrements zero and negative numbers", () => {
      expect(counterUtils.decrement(0)).toBe(-1);
      expect(counterUtils.decrement(-5)).toBe(-6);
    });
  });

  describe("reset", () => {
    test("always returns 0", () => {
      expect(counterUtils.reset()).toBe(0);
    });
  });

  describe("incrementBy", () => {
    test("increments by specified amount", () => {
      expect(counterUtils.incrementBy(5, 3)).toBe(8);
      expect(counterUtils.incrementBy(0, 10)).toBe(10);
      expect(counterUtils.incrementBy(-5, 7)).toBe(2);
    });

    test("handles negative increment amounts", () => {
      expect(counterUtils.incrementBy(5, -3)).toBe(2);
      expect(counterUtils.incrementBy(0, -1)).toBe(-1);
    });
  });

  describe("decrementBy", () => {
    test("decrements by specified amount", () => {
      expect(counterUtils.decrementBy(5, 3)).toBe(2);
      expect(counterUtils.decrementBy(10, 4)).toBe(6);
      expect(counterUtils.decrementBy(0, 5)).toBe(-5);
    });

    test("handles negative decrement amounts", () => {
      expect(counterUtils.decrementBy(5, -3)).toBe(8);
      expect(counterUtils.decrementBy(0, -1)).toBe(1);
    });
  });

  describe("utility checks", () => {
    test("isPositive correctly identifies positive numbers", () => {
      expect(counterUtils.isPositive(1)).toBe(true);
      expect(counterUtils.isPositive(100)).toBe(true);
      expect(counterUtils.isPositive(0)).toBe(false);
      expect(counterUtils.isPositive(-1)).toBe(false);
    });

    test("isNegative correctly identifies negative numbers", () => {
      expect(counterUtils.isNegative(-1)).toBe(true);
      expect(counterUtils.isNegative(-100)).toBe(true);
      expect(counterUtils.isNegative(0)).toBe(false);
      expect(counterUtils.isNegative(1)).toBe(false);
    });

    test("isZero correctly identifies zero", () => {
      expect(counterUtils.isZero(0)).toBe(true);
      expect(counterUtils.isZero(1)).toBe(false);
      expect(counterUtils.isZero(-1)).toBe(false);
    });
  });
});
