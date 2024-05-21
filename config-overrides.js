const { override, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['@assets']: path.resolve(__dirname, 'src/assets'),
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@layout']: path.resolve(__dirname, 'src/layout'),
    ['@routes']: path.resolve(__dirname, 'src/routes'),
    ['@utils']: path.resolve(__dirname, 'src/utils'),
    ['@pages']: path.resolve(__dirname, 'src/pages'),
    ['@request']: path.resolve(__dirname, 'src/request'),
    ['@config']: path.resolve(__dirname, 'src/config'),
    ['@api']: path.resolve(__dirname, 'src/api')
  }),
  addDecoratorsLegacy() // 装饰器支持(可用于编写高阶组件)
);
