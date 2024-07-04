import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        sourceMap: true
                    }
                }
            }
        ],
        exclude: /node_modules/,
    };

    const cssLoaders: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
                            localIdentName: options.isDev ?
                                '[path][name]__[local]--[hash:base64:5]' :
                                '[hash:base64:8]'
                        }
                    }
                },
                "sass-loader",
        ],
    }

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }

    return [
        tsLoader,
        cssLoaders,
        svgLoader,
        fileLoader
    ]
}