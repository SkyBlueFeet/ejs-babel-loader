"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const config = {
    info: {
        type: chalk_1.default.bgGreen,
        msg: chalk_1.default.green
    },
    danger: {
        type: chalk_1.default.bgRed,
        msg: chalk_1.default.red
    },
    warn: {
        type: chalk_1.default.bgYellow,
        msg: chalk_1.default.yellow
    }
};
function default_1(options) {
    const msg = chalk_1.default.cyan("ejs-babel-loader ") +
        config[options.type].type(options.type + ":") +
        " \n" +
        config[options.type].msg(options.msg);
    console.log(msg);
}
exports.default = default_1;
