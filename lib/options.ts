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
    /**
     * Browser adaptation properties, same as `browsers` option of` babel`
     * @type { string[] }
     *
     * @default
     * ["> 1%", "last 2 versions", "not ie <= 8"]
     */
    browsers?: browsers;
    /**
     * same as `module` option of` babel`
     * @type { boolean }
     *
     * @default
     * false
     */
    module?: module;

    /**
     * @description Whether to use advanced transform functions
     * The advanced translation function will try to translate complex ES6 syntax,
     * such as Set, Array.isArray, etc. This function is an experimental function. Please turn on it with caution
     * * This option requires core-js~3 to be installed
     * @type {boolean}
     * @default false
     */
    advancedTranslation?: advancedTranslation;

    /**
     * @description same as `useBuiltIns` option of` babel`
     * @type {"usage" | false | "entry"}
     * @default "usage"
     */
    useBuiltIns?: useBuiltIns;
};

export type PluginOptions = {
    /**
     * @description Template compilation options,
     * please refer to https://lodash.com/docs/4.17.15#templateSettings
     * @default {}
     */
    template?: pluginTemplateOptions;
    /**
     * @description Do you use babel to parse template syntax? If you use babel, please set the `variable` option in the `template`, otherwise,
     * in order to ensure no error, this option will be forced to false.
     * * This option requires you to install the babel7 plugin yourself
     * * Babel turns on strict mode by default, and the with syntax that template functions depend on cannot be executed in strict mode
     * @default false
     */
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
