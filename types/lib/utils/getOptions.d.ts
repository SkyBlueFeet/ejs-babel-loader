import { TemplateOptions } from "lodash";
import webpack = require("webpack");
export declare type PluginTemplateOptions = TemplateOptions;
export declare type useBuiltIns = "usage" | false | "entry";
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
export default function (Context: webpack.loader.LoaderContext): PluginOptions;
