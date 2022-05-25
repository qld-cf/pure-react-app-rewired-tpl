/* eslint-disable no-undef */
// 全局相关配置
const { override,
  // disableEsLint,
  useEslintRc, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra')
const path = require('path')
const antTheme = require('./config/antTheme')

const outPutFn = (config) => {
  const paths = require('react-scripts/config/paths')
  paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')
  return config
}

const resolvePath = function (dir) {
  return path.join(__dirname, dir);
};


module.exports = override(
  useEslintRc(path.resolve(__dirname, ".eslintrc.js")),
  outPutFn(),
  // disableEsLint(),
  addDecoratorsLegacy(), // 添加修饰器语法支持
  addWebpackAlias({ // 设置别名
    "@": resolvePath("/src"),
    "@utils": resolvePath("/src/utils"),
    "@config": resolvePath("/src/config"),
    "@layout": resolvePath("/src/layout"),
    "@components": resolvePath("/src/components"),
    "@store": resolvePath("/src/store"),
    "@route": resolvePath("/src/route"),
    "@views": resolvePath("/src/views"),
    "@css": resolvePath("/src/assets/css"),
    "@image": resolvePath("/src/assets/images")
  }),
  addWebpackModuleRule({
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader'
  }),
  addLessLoader({ // less配置
    javascriptEnabled: true,
    modifyVars: antTheme.commonTheme
  }),
  fixBabelImports('import', { // antd相关配置
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
)

