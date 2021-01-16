module.exports = {
  verbose: true,
  projects: ['<rootDir>'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/test/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__',
    'template.test.ts'
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest'
  },
  setupFiles: ['dotenv/config'],
  testTimeout: 15000
}
