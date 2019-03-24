const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: "./app/src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/app/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        plugins: [new TsconfigPathsPlugin()]
    },

    module: {
        rules: [
            { enforce: 'pre', test: /\.tsx?$/, use: [{ loader: 'tslint-loader', options: { fix: true } }] },
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
        ]
    },

    mode: "development"

};
