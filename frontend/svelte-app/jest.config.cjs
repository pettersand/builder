module.exports = {
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  extensionsToTreatAsEsm: [".svelte", ".ts"],
};
