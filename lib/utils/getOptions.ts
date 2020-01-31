import { getOptions } from "ts-loader-utils";

import { TemplateOptions } from "lodash";

import webpack = require("webpack");
import schema from "./schema";
export type PluginTemplateOptions = TemplateOptions;

export type useBuiltIns = "usage" | false | "entry";

export interface PluginBabelOptions {
    useStrict?: boolean;
    browsers?: string[];
    module?: boolean;
    advancedTranslation?: boolean;
    useBuiltIns?: useBuiltIns;
}

export interface PluginOptions {
    template?: PluginTemplateOptions;
    useBabel?: boolean;
    attributes?: string[];
    babel?: PluginBabelOptions;
}

export default function(this: webpack.loader.LoaderContext): PluginOptions {
    const userOptions: PluginOptions = schema(getOptions(this));
    const defaultAttrs = ["img:src"];
    const defaultBrowers = ["> 1%", "last 2 versions", "not ie <= 8"];

    if (this.query) {
        console.warn(
            'The "query" field is no longer supported, please use the "options" field to fill in the loader configuration'
        );
    }
    const finalAttrs = !userOptions.attributes
        ? defaultAttrs
        : userOptions.attributes;
    return {
        template: {
            ...userOptions.template
        },
        attributes: [...finalAttrs],
        useBabel: true,
        babel: {
            useStrict: false,
            browsers: defaultBrowers,
            advancedTranslation: false,
            module: false,
            useBuiltIns: "usage",
            ...userOptions.babel
        }
    };
}
