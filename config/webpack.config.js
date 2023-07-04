const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dev = process.env.NODE_ENV !== "production";

module.exports = {
    mode: dev ? "development" : "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "mismaksab-ui",
        umdNamedDefine: true,
    },
    devtool: "source-map",
    optimization: {
        noEmitOnErrors: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.pcss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-modules-typescript-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                compileType: "module",
                                exportGlobals: true,
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                ],
            },
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
    },
};
