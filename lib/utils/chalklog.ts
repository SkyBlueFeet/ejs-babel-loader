import chalk from "chalk";

type messsageType = "danger" | "warn" | "info";

type messageOptions = {
    type: messsageType;
    msg: string;
};

const config = {
    info: {
        type: chalk.bgGreen,
        msg: chalk.green
    },
    danger: {
        type: chalk.bgRed,
        msg: chalk.red
    },
    warn: {
        type: chalk.bgYellow,
        msg: chalk.yellow
    }
};

export default function(options: messageOptions): void {
    const msg =
        chalk.cyan("ejs-babel-loader ") +
        config[options.type].type(options.type + ":") +
        " \n" +
        config[options.type].msg(options.msg);

    console.log(msg);
}
