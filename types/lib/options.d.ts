import { TemplateOptions } from "lodash";
import webpack from "webpack";
export declare type pluginTemplateOptions = TemplateOptions;
export declare type useBuiltIns = "usage" | false | "entry";
export declare type browsers = string[];
export declare type module = boolean;
export declare type advancedTranslation = boolean;
export declare type attributes = string[];
export declare type PluginBabelOptions = {
    browsers?: browsers;
    module?: module;
    advancedTranslation?: advancedTranslation;
    useBuiltIns?: useBuiltIns;
};
export declare type PluginOptions = {
    template?: pluginTemplateOptions;
    useBabel?: boolean;
    attributes?: attributes;
    babel?: PluginBabelOptions;
};
export default function (this: webpack.loader.LoaderContext): PluginOptions;
