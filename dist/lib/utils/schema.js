"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
function showMessage(option, type = "warn", msg = "") {
    const msgTabel = {
        danger: "red",
        warn: "yellow",
        info: "green"
    };
    const funcType = (type) => chalk_1.default[msgTabel[type]];
    const defaultMsg = `ejs-babel-loader ${type}: ${option} option input type is invalid,\n` +
        "Please refer to www.baidu.com for configuration information,\n" +
        "The value has now been reset to the default";
    return !msg ? funcType(type)(msg) : defaultMsg;
}
function default_1(options) {
    var _a, _b, _c, _d, _e, _f, _g;
    const checkAttrs = options.attributes && typeof !Array.isArray(options.attributes);
    const checkUseBuiltIns = ((_a = options.babel) === null || _a === void 0 ? void 0 : _a.useBuiltIns) !== "entry" &&
        ((_b = options.babel) === null || _b === void 0 ? void 0 : _b.useBuiltIns) !== "usage";
    const checkVars = ((_c = options.template) === null || _c === void 0 ? void 0 : _c.variable) &&
        typeof ((_d = options.template) === null || _d === void 0 ? void 0 : _d.variable) === "string";
    const checkStrict = !checkVars && ((_e = options.babel) === null || _e === void 0 ? void 0 : _e.useStrict);
    const checkTransform = ((_f = options) === null || _f === void 0 ? void 0 : _f.useBabel) && !((_g = options.template) === null || _g === void 0 ? void 0 : _g.variable);
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
            console.log(showMessage("useBabel and template.variable", "danger", "If you use babel for transform, set the template.variable to string or set the usage strictly to true"));
            throw new Error();
        case checkStrict:
            console.log(showMessage("babel.useStrict", "info", "If no template is set. The variable babel.use will be forced to false. For more information, please visit www.baidu.com"));
            options.babel.useStrict = false;
    }
    return options;
}
exports.default = default_1;
