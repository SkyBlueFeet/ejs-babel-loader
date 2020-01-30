"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_loader_utils_1 = require("ts-loader-utils");
function default_1(Context) {
    const userOptions = ts_loader_utils_1.getOptions(Context);
    const defaultAttrs = userOptions.attributes || ["img:src"];
    const defaultBrowers = ["> 1%", "last 2 versions", "not ie <= 8"];
    if (this.query) {
        console.warn('The "query" field is no longer supported, please use the "options" field to fill in the loader configuration');
    }
    const options = {
        template: Object.assign({}, userOptions.template),
        attributes: [...defaultAttrs],
        useBabel: true,
        babel: Object.assign({ browsers: defaultBrowers, advancedTranslation: false, module: false, useBuiltIns: "usage" }, userOptions.babel)
    };
    return options;
}
exports.default = default_1;
