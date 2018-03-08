module.exports = {
  port: 9008,
  root: "dist",
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
    externals: {},
    globalVars: './src/css/var.less'
  },
  copy: []
};
