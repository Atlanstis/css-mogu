const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 37.5,
              exclude: /(node_modules)/,
              minPixelValue: 3,
            }),
          ],
        },
      },
      scss: {
        additionalData: `
          @import "~@/styles/tools/_sassMagic.scss";
          @import "~@/styles/settings/var.scss";
        `,
      },
    },
  },
})
