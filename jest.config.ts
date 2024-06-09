import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/pages/_app.tsx",
  ],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@public/(.*)$": "<rootDir>/public/$1",
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@contexts/(.*)$": "<rootDir>/src/contexts/$1",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "src/pages/_app.tsx",
    "/.next/",
  ],
  collectCoverage: true,
  modulePaths: ["<rootDir>/src/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
};

export default createJestConfig(customJestConfig);
