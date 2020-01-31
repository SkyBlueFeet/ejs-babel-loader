"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ts_loader_utils_1 = require("ts-loader-utils");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const schema_1 = tslib_1.__importDefault(require("./schema"));
function default_1() {
    const options = ts_loader_utils_1.getOptions(this) ? ts_loader_utils_1.getOptions(this) : {};
    const query = this.query ? this.query : "?{}";
    const userOptions = schema_1.default(Object.assign({}, options, ts_loader_utils_1.parseQuery(query)));
    // const defaultAttrs = ["img:src"];
    // const defaultBrowers = ["> 1%", "last 2 versions", "not ie <= 8"];
    // // if (this.query) {
    // //     console.warn(
    // //         'The "query" field is no longer supported, please use the "options" field to fill in the loader configuration'
    // //     );
    // // }
    // const finalAttrs = !userOptions.attributes
    //     ? defaultAttrs
    //     : userOptions.attributes;
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
    console.log(lodash_1.default.merge(defaultOptions, userOptions));
    return lodash_1.default.merge(defaultOptions, userOptions);
}
exports.default = default_1;
