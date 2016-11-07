const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [ 
        "./src/app/main.tsx"
    ],
    output: {
        filename: "./public/[name].bundle.js",
        sourceMapFilename: "./public/[name].bundle.map",
		path: path.join(__dirname, 'dist')
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.html$/, loader: 'file?name=[name].[ext]' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};