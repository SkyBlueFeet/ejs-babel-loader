import webpack from "webpack";
import { PluginBabelOptions } from "./options";
export default function (this: webpack.loader.LoaderContext, code: string, options: PluginBabelOptions): string;
