# ChangeLog

## 2020-01-30 首次发布

## 2020-01-31 首次更新

1. 增加 babel.useStrict 选项，在 template.variable 没有设置时强制设置为 false；
2. 添加 schema 校验处理用户选项并添加相应提示信息；

## 2020-02-09 修复错误，不再使用 query

1. 去除本地 babel 依赖，依靠用户安装 babel 依赖
2. lodash 依赖过大，使用 skyui-utils-collection 替代
3. query 解析 query 字段错误，webpack5 可能会放弃 query 字段，在可预见的未来不会再添加 query 选项解析功能
