module.exports = {
  port: 9008,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/main"
      }
    },
    global: {},
    devServer: {},
    externals: {}
  },
  copy: []
};
