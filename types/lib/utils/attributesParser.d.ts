export declare type positionType = "inside" | "outside";
export interface ParseResultItem {
    start: number;
    length: number;
    value: string;
}
export declare type attrSelector = (tag: string, attr: string) => boolean;
export default function parse(html: string, isRelevantTagAttr: attrSelector): Array<ParseResultItem>;
