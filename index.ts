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
    const options = getOptions(this);
    source = attrs(source, options);
    const resultFunc =
        "module.exports=" + _.template(source, options["template"]);
    const templateStr = options.useBabel
        ? babel.apply(this, [resultFunc, options])
        : resultFunc;
    return templateStr;
}
