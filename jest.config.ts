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
  testPathIgnorePatterns: ["/node_modules/", "/build/", "src/pages/_app.tsx"],
  collectCoverage: true,
  modulePaths: ["<rootDir>/src/"],
};

export default createJestConfig(customJestConfig);
