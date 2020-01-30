"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const attributesParser_1 = tslib_1.__importDefault(require("./utils/attributesParser"));
function default_1(source, options) {
    const attrs = attributesParser_1.default(source, function (tag, attr) {
        const res = options.attributes.find(function (a) {
            if (a.charAt(0) === ":") {
                return attr === a.slice(1);
            }
            else {
                return tag + ":" + attr === a;
            }
        });
        return !!res;
    });
    const context = [];
    attrs.map((item, index, arr) => {
        if (index === 0) {
            context.push(source.substring(0, item.start));
        }
        else {
            context.push(source.substring(arr[index - 1].start + arr[index - 1].length, item.start));
        }
        context.push("${require('" + item.value + "')}");
        if (index === arr.length - 1)
            context.push(source.substr(item.start + item.length));
        return item;
    });
    return context.join("");
}
exports.default = default_1;
