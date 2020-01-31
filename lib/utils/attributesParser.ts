/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
import Parser = require("fastparse");

const processMatch = function(match, strUntilValue, name, value, index): void {
    if (!this.isRelevantTagAttr(this.currentTag, name)) return;
    this.results.push({
        start: index + strUntilValue.length,
        length: value.length,
        value: value
    });
};

export type positionType = "inside" | "outside";

const parser = new Parser({
    outside: {
        "<!--.*?-->": true,
        "<![CDATA[.*?]]>": true,
        "<[!\\?].*?>": true,
        "</[^>]+>": true,
        "<([a-zA-Z\\-:]+)\\s*": function(match, tagName): positionType {
            this.currentTag = tagName;
            return "inside";
        }
    },
    inside: {
        "\\s+": true, // eat up whitespace
        ">": "outside", // end of attributes
        '(([0-9a-zA-Z\\-:]+)\\s*=\\s*")([^"]*)"': processMatch,
        "(([0-9a-zA-Z\\-:]+)\\s*=\\s*')([^']*)'": processMatch,
        "(([0-9a-zA-Z\\-:]+)\\s*=\\s*)([^\\s>]+)": processMatch
    }
});

export interface ParseResultItem {
    start: number;
    length: number;
    value: string;
}

export type attrSelector = (tag: string, attr: string) => boolean;

export default function parse(
    html: string,
    isRelevantTagAttr: attrSelector
): Array<ParseResultItem> {
    return parser.parse("outside", html, {
        currentTag: null,
        results: [],
        isRelevantTagAttr: isRelevantTagAttr
    }).results;
}
