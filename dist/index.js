"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const getOptions_1 = tslib_1.__importDefault(require("./lib/utils/getOptions"));
const babel_1 = tslib_1.__importDefault(require("./lib/babel"));
const attrs_1 = tslib_1.__importDefault(require("./lib/attrs"));
function default_1(source) {
    this.cacheable && this.cacheable();
    const options = getOptions_1.default.apply(this);
    source = attrs_1.default(source, options);
    const result = "module.exports=" + lodash_1.default.template(source, options["template"]);
    const func = options.useBabel
        ? babel_1.default.apply(this, [result, options])
        : result;
    return func;
}
exports.default = default_1;
