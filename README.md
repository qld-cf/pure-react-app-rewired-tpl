# web 基础模板

- [x] react 16.12.0
- [x] react-router
- [x] redux，redux-thunk
- [x] hooks，typescript
- [x] antd v4，sass
- [x] lodash，moment，uuid，js-cookie
- [x] suspense,lazy 懒加载
- [x] yp-rider, axios, elastic
- [x] antd 主题切换
- [x] less, dayjs

#### 运行和打包

```
$ npm i
$ npm start
$ npm run sit // 切换sit环境启动
$ npm run build // 打包
$ npm run lint // eslint检查
```

##### 使用 eslintRule

https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md

##### 使用代码美化格式

##### 注意:

以下提示：

1. The plugin name is spelled incorrectly in an ESLint configuration file (e.g. .eslintrc).
2. If ESLint is installed globally, then make sure '@typescript-eslint/eslint-plugin' is installed globally as well.
3. If ESLint is installed locally, then '@typescript-eslint/eslint-plugin' isn't installed correctly.

解决:

1.  eslint rule 添加相关 rules
2.  或者 config-overrides disableEsLint

##### 每次修改 eslintRule 后需要同步 owner，需要重启 vscode 起效
