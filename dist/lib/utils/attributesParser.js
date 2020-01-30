"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/
const Parser = require("fastparse");
const processMatch = function (match, strUntilValue, name, value, index) {
    if (!this.isRelevantTagAttr(this.currentTag, name))
        return;
    this.results.push({
        start: index + strUntilValue.length,
        length: value.length,
        value: value
    });
};
const parser = new Parser({
    outside: {
        "<!--.*?-->": true,
        "<![CDATA[.*?]]>": true,
        "<[!\\?].*?>": true,
        "</[^>]+>": true,
        "<([a-zA-Z\\-:]+)\\s*": function (match, tagName) {
            this.currentTag = tagName;
            return "inside";
        }
    },
    inside: {
        "\\s+": true,
        ">": "outside",
        '(([0-9a-zA-Z\\-:]+)\\s*=\\s*")([^"]*)"': processMatch,
        "(([0-9a-zA-Z\\-:]+)\\s*=\\s*')([^']*)'": processMatch,
        "(([0-9a-zA-Z\\-:]+)\\s*=\\s*)([^\\s>]+)": processMatch
    }
});
function parse(html, isRelevantTagAttr) {
    return parser.parse("outside", html, {
        currentTag: null,
        results: [],
        isRelevantTagAttr: isRelevantTagAttr
    }).results;
}
exports.default = parse;
