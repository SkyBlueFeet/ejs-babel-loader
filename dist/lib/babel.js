"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@babel/core");
function default_1(code, options) {
    const userOptions = options.babel;
    const advancedOptions = {
        corejs: "3",
        useBuiltIns: userOptions.useBuiltIns
    };
    const transformOption = {
        presets: [
            [
                "@babel/env",
                {
                    modules: userOptions.module,
                    targets: {
                        browsers: userOptions.browsers
                    }
                }
            ]
        ],
        plugins: []
    };
    if (options.useBabel) {
        transformOption.plugins.push("transform-remove-strict-mode-tags");
    }
    if (userOptions.advancedTranslation) {
        transformOption.presets[0][1] = Object.assign({}, transformOption.presets[0][1], advancedOptions);
        transformOption.plugins.push("@babel/plugin-transform-runtime");
    }
    return core_1.transform(code, transformOption).code;
}
exports.default = default_1;
