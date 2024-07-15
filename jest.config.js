// jest.config.js
module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@screens/(.*)$": "<rootDir>/src/screens/$1",
    "^@types/(.*)$": "<rootDir>/src/utils/types/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  modulePaths: ["<rootDir>/src"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsconfig: "tsconfig.json",
    },
  },
};
