"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalklog_1 = tslib_1.__importDefault(require("./utils/chalklog"));
const defaultWarnMsg = ` option input type is invalid,\n` +
    "Please refer to https://www.baidu.com for configuration information,\n" +
    "The value has now been reset to the default";
/**
 * 校验attributes选项
 * @param attrs
 */
function validateAttributes(attrs) {
    if (attrs && !Array.isArray(attrs)) {
        chalklog_1.default({ type: "warn", msg: "attributes" + defaultWarnMsg });
        attrs = undefined;
    }
    return attrs;
}
/**
 * 校验babel配置
 * @param babel
 */
function validateBabel(babel) {
    if (babel) {
        if (babel.useBuiltIns &&
            babel.useBuiltIns !== "entry" &&
            babel.useBuiltIns !== "usage") {
            chalklog_1.default({
                type: "warn",
                msg: "babel.useBuiltIns" + defaultWarnMsg
            });
            babel.useBuiltIns = undefined;
        }
    }
    return babel;
}
/**
 *  校验template选项
 * @param template
 */
function validateTemplate(template) {
    const validateVar = template && template.variable && typeof template.variable !== "string";
    if (validateVar) {
        chalklog_1.default({
            type: "warn",
            msg: "template.variable" + defaultWarnMsg
        });
    }
    return template;
}
/**
 * 配置状态检查
 * @param this
 */
function validateTransform() {
    if (this.template) {
        if (this.template.variable) {
            if (typeof this.template.variable !== "string") {
                chalklog_1.default({
                    type: "warn",
                    msg: "template.variable" + defaultWarnMsg
                });
            }
            else {
                if (this.useBabel !== false)
                    this.useBabel = true;
            }
        }
    }
    else {
        if (this.useBabel) {
            chalklog_1.default({
                type: "danger",
                msg: "If you use babel for transform, set the template.variable to string or set the usage strictly to true\n" +
                    "right now, useBabel will be set to false. For more information, please refer to https://www.baidu.com"
            });
        }
        this.useBabel = false;
    }
    return this;
}
/**
 * 校验 useBabel选项
 * @param useBabel
 */
function validateUseBabel(useBabel) {
    return !!useBabel;
}
function default_1(options) {
    options.attributes = validateAttributes(options.attributes);
    options.babel = validateBabel(options.babel);
    options.template = validateTemplate(options.template);
    options.useBabel = validateUseBabel(options.useBabel);
    options = validateTransform.apply(options);
    return options;
}
exports.default = default_1;
