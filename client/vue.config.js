const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/style/vars.scss"`
      },
      scss: {
        additionalData: `@import "~@/style/vars.scss";`
      },
    }
  },
//  devServer: {
//    proxy: 'http://localhost:200'
//  }
})
