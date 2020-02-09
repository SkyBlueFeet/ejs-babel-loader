# ejs-babel-loader

## Description

A webpack loader that supports lodash template tag extraction and es6 syntax translation. This loader is inspired by ejs-loader. It is written to improve the shortcomings of ejs-loader. Some functions are still experimental. Please use with caution.

### basic skills

Translate lodash template syntax into functions with parameters and freely import and export

### Feature

1. Enjoyable ES6 grammar. lodash template parsing does not translate ES6 syntax, babel does not process it, and this may cause errors on higher browsers. With this plugin, you can use syntax like let, for of, forEach, etc. to reduce the burden of using lodash templates, and it will be translated into ES5 syntax when packaging
2. Complement the shortcomings of the lodash template. Try to process the link tags such as src in the template, convert it to require form and introduce it, just use the template like a normal html file

## options

### template

Type: `object`

For template compilation options, see [templateSettings](https://lodash.com/docs/4.17.15#templateSettings).

### attributes

Type: `Array`

Parse the `URL` tag in the template and support the webpack `alias` field.This function refers to [html-loader](https://www.npmjs.com/package/html-loader).

### useBabel

Type: Boolean

Whether to use babel translation template syntax. This option requires you to install babel7 and the corresponding plugins. Babel uses strict mode by default, and the with method since the lodash template function cannot be executed in strict mode. When this option is true, you should [template] (# template) option's `variable` property sets a variable name to use the passed parameters inside the template

> If you are using babel function, please install @babel/core and @babel/preset-env

### babel

Type: object

babel translation settings, specific options

```typescript
    /**
     * Browser adaptation properties, same as `browsers` option of` babel`
     *
     * @default
     * ["> 1%", "last 2 versions", "not ie <= 8"]
     */
    browsers?: string[];
    /**
     * same as `module` option of` babel`
     *
     * @default
     * false
     */
    module?: boolean;

    /**
     * @description Whether to use advanced transform functions
     * The advanced translation function will try to translate complex ES6 syntax,
     * such as Set, Array.isArray, etc. This function is an experimental    function.
     * Please turn on it with caution
     *
     * * This option requires core-js~3 to be installed
     *
     * @default false
     */
    advancedTranslation?: boolean;

    /**
     * @description same as `useBuiltIns` option of` babel`,
     * This item is only used when advancedTranslation is turned on
     *
     * @default "usage"
     */
    useBuiltIns?: "usage" | false | "entry";

```

## Usage

The usage of this loader template is the same as ejs-loader, you can refer to [ejs-loader](https://www.npmjs.com/package/ejs-loader).

Considering the large volume of the lodash package, when you only use the <%%> <% =%> symbol in the template, you don't need to use lodash in the production environment. If you don't mind its volume, you can pass this [The webpack plugin](https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin) sets it as a global variable.

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

> The query field is deprecated, please do not use the query field to set options

### Warning

The babel translation function is currently unstable. When you have any problems using this loader, setting usebabel to false is the most effective method. Please be careful when using this plugin in a production environment.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)