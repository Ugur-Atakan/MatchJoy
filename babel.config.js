module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["nativewind/babel"],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@images": "./assets/images",
        },
      },
    ],
  ],
};
