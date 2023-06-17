const { defineConfig } = require('@vue/cli-service')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      }
    }
  }
};
