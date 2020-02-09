"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_template_1 = tslib_1.__importDefault(require("lodash.template"));
const options_1 = tslib_1.__importDefault(require("./lib/options"));
const babel_1 = tslib_1.__importDefault(require("./lib/babel"));
const attributes_1 = tslib_1.__importDefault(require("./lib/attributes"));
function default_1(source) {
    this.cacheable && this.cacheable();
    //获取 options
    const options = options_1.default.apply(this);
    //提取 attributes
    source = attributes_1.default(source, options.attributes);
    source = "module.exports=" + lodash_template_1.default(source, options.template);
    source = options.useBabel
        ? babel_1.default.apply(this, [source, options.babel])
        : source;
    return source;
}
exports.default = default_1;
