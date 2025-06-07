# Test Documentation

## Overview

This React Counter App includes comprehensive test coverage using **Vitest** and **React Testing Library**. The test suite ensures reliability, performance, and maintainability of the counter functionality.

## Test Structure

```
src/
├── App.test.jsx                    # Main component tests
├── test-setup.js                   # Test configuration
├── utils/
│   ├── counterUtils.js             # Utility functions
│   └── counterUtils.test.js        # Utility function tests
└── __tests__/
    ├── integration.test.jsx        # Integration & workflow tests
    └── performance.test.jsx        # Performance tests
```

## Test Categories

### 1. Unit Tests (`App.test.jsx`)

- **Component Rendering**: Verifies all UI elements render correctly
- **State Management**: Tests counter state changes
- **Event Handling**: Validates button click functionality
- **CSS Classes**: Ensures proper styling classes are applied

### 2. Utility Tests (`counterUtils.test.js`)

- **Pure Functions**: Tests business logic separately from UI
- **Edge Cases**: Handles various numeric operations
- **Helper Functions**: Additional utility validation

### 3. Integration Tests (`integration.test.jsx`)

- **User Workflows**: End-to-end user interaction scenarios
- **Accessibility**: Keyboard navigation and screen reader support
- **Edge Cases**: Large numbers, rapid clicking, stress testing

### 4. Performance Tests (`performance.test.jsx`)

- **Render Speed**: Component initialization time
- **Click Response**: Button interaction latency
- **Memory Usage**: Resource consumption during intensive operations
- **Rapid Operations**: Stress testing with high-frequency interactions

## Running Tests

### Basic Test Commands

```bash
# Run all tests once
npm test:run

# Run tests in watch mode (re-runs on file changes)
npm test:watch

# Run tests with coverage report
npm test:coverage

# Run tests with UI interface
npm test:ui

# Run tests (default watch mode in development)
npm test
```

### Specific Test Categories

```bash
# Run only unit tests
npx vitest run App.test.jsx

# Run only integration tests
npx vitest run __tests__/integration.test.jsx

# Run only performance tests
npx vitest run __tests__/performance.test.jsx

# Run only utility tests
npx vitest run utils/counterUtils.test.js
```

## Test Configuration

### Setup Files

- `test-setup.js`: Configures testing environment and global matchers
- `vitest.config.js`: Vitest configuration with jsdom environment

### Key Dependencies

- **Vitest**: Fast testing framework
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Custom jest matchers
- **jsdom**: Browser environment simulation

## Test Coverage Goals

- **Statements**: 100%
- **Branches**: 100%
- **Functions**: 100%
- **Lines**: 100%

## Writing New Tests

### Test File Naming Conventions

- Component tests: `ComponentName.test.jsx`
- Utility tests: `utilityName.test.js`
- Integration tests: Place in `__tests__/` directory

### Test Structure

```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import ComponentName from "./ComponentName";

describe("ComponentName", () => {
  test("should do something specific", () => {
    // Arrange
    render(<ComponentName />);

    // Act
    fireEvent.click(screen.getByText("Button"));

    // Assert
    expect(screen.getByText("Expected Result")).toBeInTheDocument();
  });
});
```

### Best Practices

1. **Descriptive Test Names**: Clearly state what is being tested
2. **Arrange-Act-Assert**: Structure tests logically
3. **Single Responsibility**: One assertion per test when possible
4. **User-Centric**: Test from user's perspective, not implementation details
5. **Accessibility**: Include accessibility testing
6. **Performance**: Consider performance implications

## Continuous Integration

The test suite is designed to run in CI/CD environments:

```bash
# CI command (non-interactive)
npm run test:run

# With coverage for CI reporting
npm run test:coverage
```

## Debugging Tests

### Common Issues

1. **Element Not Found**: Use `screen.debug()` to see rendered HTML
2. **Async Operations**: Use `waitFor()` for asynchronous updates
3. **Event Simulation**: Ensure proper event types (`fireEvent` vs `userEvent`)

### Debug Commands

```javascript
// Debug rendered component
screen.debug();

// Debug specific element
screen.debug(screen.getByText("Counter"));

// Log all queries
screen.logTestingPlaygroundURL();
```

## Performance Benchmarks

### Expected Performance Metrics

- **Component Render**: < 100ms
- **Button Click Response**: < 50ms
- **100 Rapid Clicks**: < 1000ms
- **Memory Stability**: No leaks during intensive operations

### Monitoring

Performance tests automatically verify these benchmarks and will fail if performance degrades significantly.

## Future Test Enhancements

### Potential Additions

- **Visual Regression Tests**: Screenshot comparisons
- **Cross-Browser Testing**: Multiple browser environment testing
- **Mobile Testing**: Touch event simulation
- **Internationalization**: Multiple language testing
- **Theme Testing**: Light/dark mode testing

### Tools for Expansion

- **Playwright**: End-to-end testing
- **Storybook**: Component isolation testing
- **Cypress**: Integration testing
- **Jest Image Snapshot**: Visual regression testing
