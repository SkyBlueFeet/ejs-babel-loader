import template from "lodash.template";
import webpack from "webpack";
import getOptions, { PluginOptions } from "./lib/options";
import babel from "./lib/babel";
import replaceAttrs from "./lib/attributes";

export default function(
    this: webpack.loader.LoaderContext,
    source: string
): string {
    this.cacheable && this.cacheable();
    //获取 options
    const options = getOptions.apply(this) as PluginOptions;

    //提取 attributes
    source = replaceAttrs(source, options.attributes);
    source = "module.exports=" + template(source, options.template);
    source = options.useBabel
        ? babel.apply(this, [source, options.babel])
        : source;
    return source;
}
