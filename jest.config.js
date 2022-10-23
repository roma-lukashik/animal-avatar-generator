export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules', 'dist'],
  transform: {
    '(.*)\.ts': [
      'ts-jest', {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
}
