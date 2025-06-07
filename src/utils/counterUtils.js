// Counter utility functions for testing business logic separately
export const counterUtils = {
  increment: (value) => value + 1,
  decrement: (value) => value - 1,
  reset: () => 0,

  // Additional utility functions that could be useful
  incrementBy: (value, amount) => value + amount,
  decrementBy: (value, amount) => value - amount,
  isPositive: (value) => value > 0,
  isNegative: (value) => value < 0,
  isZero: (value) => value === 0,
};

export default counterUtils;
