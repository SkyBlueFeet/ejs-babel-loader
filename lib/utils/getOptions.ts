import { getOptions } from "ts-loader-utils";

import { TemplateOptions } from "lodash";

import webpack = require("webpack");
export type PluginTemplateOptions = TemplateOptions;

export type useBuiltIns = "usage" | false | "entry";

export interface PluginBabelOptions {
    browsers?: string[];
    module?: boolean;
    advancedTranslation?: boolean;
    useBuiltIns?: useBuiltIns;
}

export interface PluginOptions {
    template?: PluginTemplateOptions;
    useBabel?: boolean;
    attributes?: string[] | false;
    babel?: PluginBabelOptions;
}

export default function(Context: webpack.loader.LoaderContext): PluginOptions {
    const userOptions: PluginOptions = getOptions(Context) as PluginOptions;
    const defaultAttrs = userOptions.attributes || ["img:src"];
    const defaultBrowers = ["> 1%", "last 2 versions", "not ie <= 8"];

    if (this.query) {
        console.warn(
            'The "query" field is no longer supported, please use the "options" field to fill in the loader configuration'
        );
    }
    const options: PluginOptions = {
        template: {
            ...userOptions.template
        },
        attributes: [...defaultAttrs],
        useBabel: true,
        babel: {
            browsers: defaultBrowers,
            advancedTranslation: false,
            module: false,
            useBuiltIns: "usage",
            ...userOptions.babel
        }
    };
    return options;
}
