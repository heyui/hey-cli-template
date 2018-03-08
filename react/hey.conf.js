module.exports = {
  port: 9008,
  root: "dist",
  react: true,
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/main",
        commons: []
      }
    },
    commonTrunk: {
      common: []
    },
    global: {},
    devServer: {},
    externals: {}
  },
  copy: []
};
