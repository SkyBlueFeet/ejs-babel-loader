"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@babel/core");
function default_1(code, options) {
    const advancedOptions = {
        corejs: "3",
        useBuiltIns: options.useBuiltIns
    };
    const transformOption = {
        presets: [
            [
                "@babel/env",
                {
                    modules: options.module,
                    targets: {
                        browsers: options.browsers
                    }
                }
            ]
        ],
        plugins: []
    };
    if (options.advancedTranslation) {
        transformOption.presets[0][1] = Object.assign({}, transformOption.presets[0][1], advancedOptions);
        transformOption.plugins.push("@babel/plugin-transform-runtime");
    }
    return core_1.transform(code, transformOption).code;
}
exports.default = default_1;
