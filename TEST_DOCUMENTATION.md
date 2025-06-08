# Test Documentation

## Overview

Comprehensive test suite using **Vitest** and **React Testing Library** with 35+ tests across 4 categories, ensuring 100% code coverage and reliable counter functionality.

## Test Categories & Coverage

### 1. Unit Tests (`App.test.jsx`) - 12 tests

- Component rendering validation
- State management (increment, decrement, reset)
- Button interaction and event handling
- CSS class application

### 2. Utility Tests (`counterUtils.test.js`) - 12 tests

- Pure function business logic
- Edge cases and numeric operations
- Helper function validation

### 3. Integration Tests (`integration.test.jsx`) - 7 tests

- End-to-end user workflows
- Accessibility (keyboard navigation, screen readers)
- Stress testing with rapid interactions

### 4. Performance Tests (`performance.test.jsx`) - 4 tests

- Component render speed (< 100ms)
- Button click response time (< 50ms)
- Rapid operation handling (100 clicks < 1000ms)
- Memory usage validation

## Running Tests

```bash
# Basic commands
npm run test:run        # Run all tests once
npm run test:watch      # Watch mode (re-runs on changes)
npm run test:coverage   # With coverage report
npm run test:ui         # Interactive UI interface

# Specific test categories
npx vitest run App.test.jsx                    # Unit tests only
npx vitest run __tests__/integration.test.jsx  # Integration tests only
npx vitest run __tests__/performance.test.jsx  # Performance tests only
npx vitest run utils/counterUtils.test.js      # Utility tests only
```

## Test Configuration

**Framework:** Vitest with jsdom environment  
**Utilities:** React Testing Library + Jest DOM matchers  
**Setup:** `test-setup.js` configures global test environment

**Coverage Goals:** 100% across statements, branches, functions, and lines

## Writing New Tests

### Best Practices

```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import ComponentName from "./ComponentName";

describe("ComponentName", () => {
  test("should perform specific behavior", () => {
    // Arrange
    render(<ComponentName />);

    // Act
    fireEvent.click(screen.getByText("Button"));

    // Assert
    expect(screen.getByText("Expected Result")).toBeInTheDocument();
  });
});
```

**Guidelines:**

- Use descriptive test names that explain expected behavior
- Follow Arrange-Act-Assert pattern
- Test user interactions, not implementation details
- Include accessibility testing
- One assertion per test when possible

### Debugging Tests

```javascript
// Debug rendered component HTML
screen.debug();

// Debug specific element
screen.debug(screen.getByText("Counter"));

// Get testing playground URL
screen.logTestingPlaygroundURL();
```

### File Naming Conventions

- Component tests: `ComponentName.test.jsx`
- Utility tests: `utilityName.test.js`
- Integration tests: Place in `__tests__/` directory
