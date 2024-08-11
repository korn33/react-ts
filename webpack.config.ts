import {buildWebpackConfig} from "./config/buildWebpack/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/buildWebpack/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode: BuildMode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 3000
    const apiUrl: string = env.apiUrl || 'http://localhost:8000'

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl
    })
};