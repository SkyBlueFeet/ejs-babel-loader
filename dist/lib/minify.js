"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param string 需要压缩的字符串
 */
function default_1(string) {
    const $string = string.split("       ");
    let result = "";
    result = $string.join("");
    return result;
}
exports.default = default_1;
