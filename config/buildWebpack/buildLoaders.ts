import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {cssLoader} from "./loaders/cssLoader";

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

    const cssLoaders: webpack.RuleSetRule = cssLoader(options.isDev)

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

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                // "plugins": [
                //     [
                //         "i18next-extract",
                //         {
                //             locales: ['ru', 'en'],
                //             keyAsDefaultValue: true
                //         }
                //     ],
                // ]
            }
        }
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        cssLoaders
    ]
}