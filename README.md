# temporal

A Temporal.io workflow application with TypeScript.

## Features

- TypeScript-based Temporal workflows and activities
- Modern dependency management with latest stable versions
- Comprehensive testing with Jest
- Code quality with ESLint and Prettier
- CI/CD with GitHub Actions

## Dependencies

### Core Dependencies
- `@temporalio/activity@^1.14.1` - Temporal activity SDK
- `@temporalio/client@^1.14.1` - Temporal client SDK
- `@temporalio/worker@^1.14.1` - Temporal worker SDK
- `@temporalio/workflow@^1.14.1` - Temporal workflow SDK

### Development Dependencies
- `typescript@^5.7.2` - TypeScript compiler
- `eslint@^9.18.0` - Linting (latest stable)
- `jest@^29.7.0` - Testing framework
- `prettier@^3.4.2` - Code formatting

## Getting Started

### Install Dependencies
```bash
npm install
```

### Build
```bash
npm run build
```

### Run Tests
```bash
npm test
```

### Lint Code
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

## Project Structure

```
src/
├── activities/     # Temporal activities
│   ├── greet.ts
│   └── greet.test.ts
├── workflows/      # Temporal workflows
│   └── greeting.ts
└── index.ts        # Entry point
```

## CI/CD

GitHub Actions workflow runs on:
- Node.js 18.x and 20.x
- Executes: lint, build, and test

## License

MIT
