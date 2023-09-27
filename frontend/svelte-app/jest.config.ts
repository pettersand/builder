/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  preset: "ts-jest",
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true, // Add this line if you're using svelte preprocessors
      },
    ],
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  transformIgnorePatterns: ["node_modules/(?!(svelte)/)"], // Add this line
};

export default config;
