import { getOptions, parseQuery } from "ts-loader-utils";
import _ from "lodash";
import { TemplateOptions } from "lodash";

import webpack from "webpack";

import schema from "./schema";

export type pluginTemplateOptions = TemplateOptions;

export type useBuiltIns = "usage" | false | "entry";

export type browsers = string[];
export type module = boolean;
export type advancedTranslation = boolean;
export type attributes = string[];

export type PluginBabelOptions = {
    browsers?: browsers;
    module?: module;
    advancedTranslation?: advancedTranslation;
    useBuiltIns?: useBuiltIns;
};

export type PluginOptions = {
    template?: pluginTemplateOptions;
    useBabel?: boolean;
    attributes?: attributes;
    babel?: PluginBabelOptions;
};

export default function(this: webpack.loader.LoaderContext): PluginOptions {
    const options = getOptions(this) ? getOptions(this) : {};
    const query = this.query ? this.query : "?{}";

    const userOptions = schema(_.assign(options, parseQuery(query)));

    const defaultOptions: PluginOptions = {
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
    return _.merge(defaultOptions, userOptions);
}
