"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ts_loader_utils_1 = require("ts-loader-utils");
const schema_1 = tslib_1.__importDefault(require("./schema"));
function default_1() {
    const userOptions = schema_1.default(ts_loader_utils_1.getOptions(this));
    const defaultAttrs = ["img:src"];
    const defaultBrowers = ["> 1%", "last 2 versions", "not ie <= 8"];
    if (this.query) {
        console.warn('The "query" field is no longer supported, please use the "options" field to fill in the loader configuration');
    }
    const finalAttrs = !userOptions.attributes
        ? defaultAttrs
        : userOptions.attributes;
    return {
        template: Object.assign({}, userOptions.template),
        attributes: [...finalAttrs],
        useBabel: true,
        babel: Object.assign({ useStrict: false, browsers: defaultBrowers, advancedTranslation: false, module: false, useBuiltIns: "usage" }, userOptions.babel)
    };
}
exports.default = default_1;
