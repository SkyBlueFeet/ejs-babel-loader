import { PluginOptions } from "./utils/getOptions";
import chalk from "chalk";

type messsageType = "danger" | "warn" | "info";
function showMessage(
    option: string,
    type: messsageType = "warn",
    msg = ""
): string {
    const msgTabel = {
        danger: "red",
        warn: "yellow",
        info: "green"
    };
    const funcType = (type: messsageType): Function => chalk[msgTabel[type]];

    const defaultMsg =
        `ejs-babel-loader ${type}: ${option} option input type is invalid,\n` +
        "Please refer to www.baidu.com for configuration information,\n" +
        "The value has now been reset to the default";
    return !msg ? funcType(type)(msg) : defaultMsg;
}

export default function(options: PluginOptions): PluginOptions {
    const checkAttrs =
        options.attributes && typeof !Array.isArray(options.attributes);
    const checkUseBuiltIns =
        options.babel?.useBuiltIns !== "entry" &&
        options.babel?.useBuiltIns !== "usage";
    const checkVars =
        options.template?.variable &&
        typeof options.template?.variable === "string";
    const checkStrict = !checkVars && options.babel?.useStrict;
    const checkTransform = options?.useBabel && !options.template?.variable;

    switch (true) {
        case !!checkAttrs:
            console.log(showMessage("attributes"));
            options.attributes = undefined;
            break;
        case checkUseBuiltIns:
            console.log(showMessage("babel.useBuiltIns"));
            options.babel.useBuiltIns = undefined;
            break;
        case !checkVars:
            console.log(showMessage("template.variable"));
            break;
        case checkTransform:
            console.log(
                showMessage(
                    "useBabel and template.variable",
                    "danger",
                    "If you use babel for transform, set the template.variable to string or set the usage strictly to true"
                )
            );
            throw new Error();
        case checkStrict:
            console.log(
                showMessage(
                    "babel.useStrict",
                    "info",
                    "If no template is set. The variable babel.use will be forced to false. For more information, please visit www.baidu.com"
                )
            );
            options.babel.useStrict = false;
    }
    return options;
}
