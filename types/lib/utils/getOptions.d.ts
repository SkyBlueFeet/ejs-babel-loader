import { TemplateOptions } from "lodash";
import webpack = require("webpack");
export declare type PluginTemplateOptions = TemplateOptions;
export declare type useBuiltIns = "usage" | false | "entry";
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
export default function (this: webpack.loader.LoaderContext): PluginOptions;
