declare type messsageType = "danger" | "warn" | "info";
declare type messageOptions = {
    type: messsageType;
    msg: string;
};
export default function (options: messageOptions): void;
export {};
