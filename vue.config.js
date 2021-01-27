/*
 * @Author        : yeyuhang
 * @Date          : Do not edit
 * @LastEditTime: 2021-01-27 16:24:09
 * @LastEditors: Please set LastEditors
 * @Descripttion  : Descripttion
 */

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    port: '5000',
    hot: true,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api': {
        target: 'http://47.93.229.170:3000',
        // target: 'http://192.168.1.140:3000',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
