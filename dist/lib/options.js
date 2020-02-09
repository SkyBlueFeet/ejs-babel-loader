"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ts_loader_utils_1 = require("ts-loader-utils");
const skyui_utils_collection_1 = tslib_1.__importDefault(require("skyui-utils-collection"));
function default_1() {
    const options = ts_loader_utils_1.getOptions(this) ? ts_loader_utils_1.getOptions(this) : {};
    // const query = utils.isUndefinedOrNull(this.query) ? "?{}" : this.query;
    // const userOptions = schema(Object.assign(options, parseQuery(query)));
    const defaultOptions = {
        template: {},
        useBabel: false,
        attributes: ["img:src"],
        babel: {
            useBuiltIns: "usage",
            browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
            module: false,
            advancedTranslation: false
        }
    };
    return skyui_utils_collection_1.default.mergeDeep(defaultOptions, options);
}
exports.default = default_1;
