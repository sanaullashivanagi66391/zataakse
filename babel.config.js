module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          "@Config":"./src/Config",
          "@Atoms": "./src/Atoms",
          "@Assets": "./src/Assets",
          "@Molecules": "./src/Molecules",
          "@Organisms": "./src/Organisms",
          "@Pages": "./src/Pages",
          "@Redux": "./src/Redux",
          "@Templates": "./src/Templates",
          "@Types": "./src/Types",
          "@Tests": "./src/Tests",
          "@Routes": "./src/Routes",
          "@Utils": "./src/Utils",
          "@Assets": "./src/Assets",
          "@Helpers": "./src/Helpers",
          "@Learning":"./src/Learning",
          "@JsonProccessing":"./src/JsonProccessing"
        }
      },
    ],
    // 'react-native-reanimated/plugin',
    '@babel/plugin-transform-flow-strip-types',
    ["@babel/plugin-transform-private-methods", { "loose": true }]
  ]
};