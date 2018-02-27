module.exports = {
  port: 9008,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/app",
        commons:['common']
      }
    },
    commonTrunk: {
      common:[
        "vue",
        "vue-router"
      ]
    },
    global: {},
    devServer: {
      historyApiFallback: true
    },
    externals: {
    }
  },
  copy: []
};