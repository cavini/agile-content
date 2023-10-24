/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  moduleDirectories: ["node_modules", "src"],

  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/svgrMock.tsx",
  },

  preset: "ts-jest",

  setupFilesAfterEnv: ["jest-styled-components"],

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },

  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
};
