const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/tools/_sassMagic.scss";
          @import "~@/styles/settings/var.scss";
        `,
      },
    },
  },
})
