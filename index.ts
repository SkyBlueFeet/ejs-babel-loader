import _ from "lodash";
import webpack from "webpack";
import getOptions from "./lib/utils/getOptions";
import babel from "./lib/babel";
import attrs from "./lib/attrs";

export default function(
    this: webpack.loader.LoaderContext,
    source: string
): string {
    this.cacheable && this.cacheable();
    const options = getOptions.apply(this);
    source = attrs(source, options);
    const result = "module.exports=" + _.template(source, options["template"]);
    const func = options.useBabel
        ? babel.apply(this, [result, options])
        : result;
    return func;
}
