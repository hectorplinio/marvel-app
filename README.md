# Marvel App

Marvel App is a web application that allows users to browse Marvel characters and their comics. Users can search for characters, view detailed information about each character, and mark characters as favorites.

Production URL: [Marvel App](https://marvel-app-five-wheat.vercel.app/)

## Table of Contents

- [Marvel App](#marvel-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Architecture](#architecture)
  - [Folder Structure](#folder-structure)
  - [Environment Variables](#environment-variables)
  - [Development](#development)
    - [Style guide](#style-guide)
    - [Testing](#testing)
    - [Running tests](#running-tests)
    - [End-to-End Testing](#end-to-end-testing)
  - [After finishing a task](#after-finishing-a-task)
  - [Dependencies](#dependencies)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hectorplinio/marvel-app.git
cd marvel-app
```

2. Install the dependencies:

```
npm install
```

Keep in mind that we use `npm` for managing Node packages. If you try installing the dependencies with `yarn`, it will generate a `yarn-lock` file that will likely cause problems with the existing `package-lock.json`.

3. Create a .env.local file in the root directory and add your Marvel API keys. Please note that you must go to this [URL](https://developer.marvel.com/account) and register in order to obtain the different keys.

```makefile
NEXT_PUBLIC_MARVEL_PUBLIC_KEY=your_marvel_public_key
MARVEL_PRIVATE_KEY=your_marvel_private_key
```

## Running the Application

To run the application in development mode, use the following command:

```
npm run dev
```

This will start the application on http://localhost:3000.

To build the application for production, use the following command:

```
npm run build
```

And to start the production build:

```
npm start
```

## Architecture

The application is built with Next.js, a React framework that provides server-side rendering and static site generation. It uses the Marvel API to fetch character and comic data.

### Key Components

- Next.js: Provides the framework for server-side rendering and routing.
- React: Used for building the user interface.
- Tailwind CSS: Used for styling the application.

## Folder Structure

```
marvel-app/
├── public/              # Static assets
├── tests/               # 2e2 test folder
├── src/
│   ├── components/      # React components
│   ├── contexts/        # Context providers for global state
│   ├── domain/          # Domain-specific logic
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── .env.local           # Environment variables
├── .eslintrc.json       # ESLint configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Environment Variables

The application requires the following environment variables, which should be stored in a .env.local file in the root directory:

- NEXT_PUBLIC_MARVEL_PUBLIC_KEY: Your Marvel API public key.
- MARVEL_PRIVATE_KEY: Your Marvel API private key.

## Development

### Style guide

Before submitting a patch, please make sure that the code is formatted executing this command:

```
npm run format
```

### Testing

Testing is crucial for us and we strive for high coverage of our code.

We encourage you to write tests for every functionality you build and also update the existing ones if they need to.

#### Running tests

Before running the test, install the needed dependencies:

```
npm install
```

Execute all tests with:

```
npm run test
```

#### End-to-End Testing

We use Playwright for end-to-end testing. Playwright tests can be found in the `tests` directory.

To run the Playwright tests, use the following command:

```
npm run test:playwright
```

Ensure the application is running before executing the E2E tests. You can start the application with:

```
npm run dev
```

Then, in a separate terminal, run the Playwright tests.

## After finishing a task

Before pushing your changes, make sure you run the linter and prettier to ensure the code follows the rules, or the CI pipeline will throw an error and fail:

```
npm run lint:fix
npm run format
```

## Dependencies

### Production dependencies [Hard]

| Name            | Reason                                                                           |
| --------------- | -------------------------------------------------------------------------------- |
| playwright/test | Library to do the 2e2 tests cases.                                               |
| next            | A React framework that enables server-side rendering and static site generation. |
| react           | A JavaScript library for building user interfaces.                               |
| react-dom       | DOM-specific methods for React.                                                  |
| react-icons     | Popular icons as React components.                                               |
| react-spinners  | Loading spinner components for React.                                            |

### Development dependencies [Development]

| Name                             | Reason                                                     |
| -------------------------------- | ---------------------------------------------------------- |
| @commitlint/cli                  | Linting tool for commit messages.                          |
| @commitlint/config-conventional  | Conventional commit guidelines.                            |
| @testing-library/jest-dom        | Custom Jest matchers for DOM nodes.                        |
| @testing-library/react           | Utilities for testing React components.                    |
| @types/\*                        | Types definitions                                          |
| @typescript-eslint/eslint-plugin | ESLint plugin for TypeScript.                              |
| autoprefixer                     | PostCSS plugin to parse CSS and add vendor prefixes.       |
| eslint                           | Linter for identifying problematic patterns in JavaScript. |
| eslint-config-next               | ESLint configuration for Next.js.                          |
| eslint-config-prettier           | Turns off ESLint rules that conflict with Prettier.        |
| eslint-plugin-prettier           | Runs Prettier as an ESLint rule.                           |
| husky                            | Git hooks for running scripts.                             |
| jest                             | JavaScript testing framework.                              |
| jest-environment-jsdom           | Jest environment for testing with JSDOM.                   |
| lint-staged                      | Runs linters on git staged files.                          |
| pinst                            | Achieve the desired effect by setting a prepare            |
| prettier                         | Code formatter                                             |
| postcss                          | CSS transformation tool.                                   |
| tailwindcss                      | Utility-first CSS framework.                               |
| ts-jest                          | Transformer for testing in Typescript                      |
| ts-node                          | TypeScript execution engine and REPL for Node              |
| typescript                       | Typescript compiler                                        |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
