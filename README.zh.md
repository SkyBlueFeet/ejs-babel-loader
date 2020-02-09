# ejs-babel-loader

## 描述

一个支持 lodash 模板标签提取和 es6 语法转译的 webpack loader,这个loader受ejs-loader启发，为了完善ejs-loader的缺点而写出来，部分功能仍然是实验性功能，请谨慎使用。

### 基本功能

将 lodash 模板语法转译成带参函数并自由导入导出

### Feature

1. 愉快的食用 ES6 语法。lodash 模板解析不会转换 ES6 语法，babel 也不会处理，而这有可能在高版本浏览器上出错。使用这个插件，你可以使用像 let、for of、forEach 等等语法来减小使用 lodash 模板的负担，并且会在打包时转译为 ES5 语法
2. 补足 lodash 模板的短板。尝试处理模板中的 src 等链接标签，将其转化为 require 形式引入，就像普通 html 文件那样使用模板

## Options

### template

Type: `object`

模板编译选项,请参考 [templateSettings](https://lodash.com/docs/4.17.15#templateSettings).

### attributes

Type: `Array`

解析模板内`URL`标签，支持 webpack `alias`字段。此功能参考了[html-loader](https://www.npmjs.com/package/html-loader).

### useBabel

Type:Boolean

是否使用 babel 转译模板语法，此选项需要您安装 babel7 及相应插件，由于 babel 默认使用严格模式，而 lodash 模板函数以来的 with 方法无法在严格模式下执行，因此当该选项为 true 时，您应该在[template](#template)选项的`variable`属性设置一个变量名在模板内部使用传入的参数

### babel

Type:object

babel 转译设置，具体选项

> 如果你是用babel功能，请自行安装 @babel/core与@babel/preset-env

```typescript
    /**
     * Browser adaptation properties, same as `browsers` option of` babel`
     * @default
     * ["> 1%", "last 2 versions", "not ie <= 8"]
     */
    browsers?: string[];
    /**
     * same as `module` option of` babel`
     * @default
     * false
     */
    module?: boolean;

    /**
     * @description Whether to use advanced transform functions
     * The advanced translation function will try to translate complex ES6 syntax,
     * such as Set, Array.isArray, etc. This function is an experimental function. Please turn on it with caution
     * * This option requires core-js~3 to be installed
     * @default false
     */
    advancedTranslation?: boolean;

    /**
     * @description same as `useBuiltIns` option of` babel`,
     * This item is only used when advancedTranslation is turned on
     * @default "usage"
     */
    useBuiltIns?: "usage" | false | "entry";
```

## Usage

loader在导入导出方面的用法与[ejs-loader](https://www.npmjs.com/package/ejs-loader)相同。

考虑到lodash包体积较大，当你在模板中只使用了<% %> <%= %>符号时，你并不需要在生产环境中使用lodash，如果你不介意其体积，你可以通过[这个webpack插件](https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin)将其设置为全局变量。

```js
var template = require("ejs!./file.ejs");
// => The imported variable is a function
 
// And then use it somewhere in your code
template(data)
```

**webpack.config.js**

```typescript
module.exports = {
  module: {
    rules: [
          test: /\.ejs?$/,
    	  loader: "ejs-babel-loader",
          // This is a default configuration table
    	  options: {
          	template: {},
        	useBabel: false,
        	attributes: ["img:src"],
        	babel: {
            	useBuiltIns: "usage",
            	browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
            	module: false,
            	advancedTranslation: false
        	}
    	 }
    ]
  }
}
```

> query字段已被废弃，请不要使用query字段设置选项

### Warning

babel转译功能目前并不稳定，当你使用本loader出现什么问题时，将usebabel设置为false是最有效的的方法，请谨慎在生产环境中使用本插件

## License

MIT (http://www.opensource.org/licenses/mit-license.php)