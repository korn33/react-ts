import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServerConfig} from "./buildDevServerConfig";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
    const {paths, mode, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(paths.html),
        devtool: isDev ? 'source-map' : undefined,
        devServer: isDev ? buildDevServerConfig(options) : undefined
    }
}