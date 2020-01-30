import webpack from "webpack";
import { PluginOptions } from "./utils/getOptions";
export default function (this: webpack.loader.LoaderContext, code: string, options: PluginOptions): string;
