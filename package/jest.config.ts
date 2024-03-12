/* eslint-disable */
export default {
  displayName: 'utils', preset: '../jest.preset.js', testEnvironment: 'jsdom', transform: {
    '^.+\\.[tj]s$': ['ts-jest', {tsconfig: '<rootDir>/tsconfig.spec.json'}],
  }, moduleFileExtensions: ['ts', 'js', 'html'], coverageDirectory: '../coverage/utils',
};
