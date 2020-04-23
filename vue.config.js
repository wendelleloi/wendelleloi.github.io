
module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  productionSourceMap: false,
  configureWebpack: config => {

  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/styles/variables.scss`
        // eslint-disable-next-line quotes
        data: `@import "~@/styles/main.scss";`
      }
    }
  },
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch')
  }
}
