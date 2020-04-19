module.exports = {
  configureWebpack: {
  devServer: {
      proxy: {
        "/api/": {
          target: "http://localhost:3090/"
        }
      }
    }
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Aon exercise - Connect four'
      return args
    })
  },
  css : {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
}
