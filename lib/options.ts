import { getOptions } from "ts-loader-utils";
import utils from "skyui-utils-collection";
import { TemplateOptions } from "lodash";

import webpack from "webpack";

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
    // const query = utils.isUndefinedOrNull(this.query) ? "?{}" : this.query;

    // const userOptions = schema(Object.assign(options, parseQuery(query)));

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
    return utils.mergeDeep(defaultOptions, options);
}
