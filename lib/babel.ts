import { transform, TransformOptions } from "@babel/core";
import webpack from "webpack";
import { PluginBabelOptions } from "./options";

export default function(
    this: webpack.loader.LoaderContext,
    code: string,
    options: PluginBabelOptions
): string {
    const advancedOptions = {
        corejs: "3", // 声明corejs版本
        useBuiltIns: options.useBuiltIns
    };
    const transformOption: TransformOptions = {
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
        transformOption.presets[0][1] = Object.assign(
            {},
            transformOption.presets[0][1],
            advancedOptions
        );
        transformOption.plugins.push("@babel/plugin-transform-runtime");
    }
    return transform(code, transformOption).code;
}
