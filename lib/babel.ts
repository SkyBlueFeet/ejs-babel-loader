import { transform, TransformOptions } from "@babel/core";
import webpack from "webpack";
import { PluginOptions } from "./utils/getOptions";

export default function(
    this: webpack.loader.LoaderContext,
    code: string,
    options: PluginOptions
): string {
    const userOptions = options.babel;

    const advancedOptions = {
        corejs: "3", // 声明corejs版本
        useBuiltIns: userOptions.useBuiltIns
    };
    const transformOption: TransformOptions = {
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
        plugins: ["babel-plugin-transform-remove-strict-modes"]
    };
    if (options.useBabel) {
        transformOption.plugins.push(
            "babel-plugin-transform-remove-strict-modes"
        );
    }
    if (userOptions.advancedTranslation) {
        transformOption.presets[0][1] = Object.assign(
            {},
            transformOption.presets[0][1],
            advancedOptions
        );
        transformOption.plugins.push("@babel/plugin-transform-runtime");
    }
    return transform(code, transformOption).code;
}
