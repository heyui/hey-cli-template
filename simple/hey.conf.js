module.exports = {
  port: 9008,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/app"
      }
    },
    global: {},
    devServer: {},
    externals: {}
  },
  copy: []
};
