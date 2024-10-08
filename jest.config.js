/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/styles/**',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
  },
}

module.exports = createJestConfig(config)
