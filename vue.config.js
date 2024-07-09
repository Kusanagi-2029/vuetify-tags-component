const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        implementation: require('sass'), // Use `sass` implementation
        additionalData: `@import "~@/assets/styles/_main.scss";`
      }
    }
  }
})
