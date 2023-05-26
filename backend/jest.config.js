module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns : [
    "<rootDir>/build/*"
  ],
  moduleNameMapper: {
    '^mocks/(.*)$': '<rootDir>/tests/mocks/$1',
  },
}
