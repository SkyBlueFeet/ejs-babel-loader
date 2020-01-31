import parser from "./utils/attributesParser";
import { attributes } from "./options";

export default function(source: string, attrOption: attributes): string {
    const attrs = parser(source, function(tag, attr) {
        const res = attrOption.find(function(a) {
            if (a.charAt(0) === ":") {
                return attr === a.slice(1);
            } else {
                return tag + ":" + attr === a;
            }
        });
        return !!res;
    });
    const context: string[] = [];
    attrs.map((item, index, arr) => {
        if (index === 0) {
            context.push(source.substring(0, item.start));
        } else {
            context.push(
                source.substring(
                    arr[index - 1].start + arr[index - 1].length,
                    item.start
                )
            );
        }
        context.push("${require('" + item.value + "')}");
        if (index === arr.length - 1)
            context.push(source.substr(item.start + item.length));
        return item;
    });

    return context.join("");
}
