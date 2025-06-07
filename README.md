# React Counter App

A simple, modern counter application built with React and Vite. This app demonstrates basic React concepts including state management, event handling, and component composition.

## Features

- ➕ Increment counter
- ➖ Decrement counter
- 🔄 Reset counter to zero
- 📱 Responsive design
- 🎨 Modern gradient UI with smooth animations
- ⚡ Fast development with Vite HMR

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Testing

Run the comprehensive test suite:

```bash
# Run all tests once
npm run test:run

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with UI interface
npm run test:ui
```

The project includes:

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: User workflow and accessibility testing
- **Performance Tests**: Render speed and memory usage validation
- **100% Test Coverage**: All functionality is thoroughly tested

See [TEST_DOCUMENTATION.md](./TEST_DOCUMENTATION.md) for detailed testing information.

## CI/CD Pipeline

This project uses **GitHub Actions** for automated testing and deployment:

### 🤖 Automated Workflow

- **Pull Request Testing**: All PRs to `main` branch automatically run the full test suite
- **Manual Merge Control**: Comment `:runMerge` to trigger merge with unit tests
- **Merge Blocking**: PRs with failing tests cannot be merged
- **Real-time Feedback**: Detailed test results and coverage reports posted as PR comments

### ⚡ Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and add tests
4. Push and create a pull request
5. Watch automated tests run and receive feedback
6. Comment `:runMerge` to merge when tests pass! 🎉

### 📊 What Gets Tested

- ESLint code quality checks
- 35+ comprehensive unit tests
- Integration and performance tests
- Production build validation
- Test coverage reporting

See [GITHUB_ACTIONS_DOCS.md](./GITHUB_ACTIONS_DOCS.md) for complete CI/CD documentation.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities
- **GitHub Actions** - CI/CD pipeline automation
- **CSS3** - Styling with gradients and animations
- **ESLint** - Code linting

## Project Structure

```
src/
├── App.jsx                     # Main counter component
├── App.css                     # Component styles
├── App.test.jsx               # Component tests
├── main.jsx                   # Application entry point
├── index.css                  # Global styles
├── test-setup.js              # Test configuration
├── utils/
│   ├── counterUtils.js        # Utility functions
│   └── counterUtils.test.js   # Utility tests
└── __tests__/
    ├── integration.test.jsx   # Integration tests
    └── performance.test.jsx   # Performance tests
```

## Development

This project uses:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh with Babel
- ESLint for code quality

## License

This project is open source and available under the [MIT License](LICENSE).
