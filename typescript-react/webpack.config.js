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
            { test: /\.min\.css$/, loaders: ['style', 'css'] },
            { test: /\.html$/, loader: 'file?name=[name].[ext]' },
			{ test: /\.(png|jpg)$/, loader: 'file?name=public/images/[name].[hash].[ext]' },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=public/fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,loader: 'file?name=public/fonts/[name].[hash].[ext]&mimetype=application/font-woff'},
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=public/fonts/[name].[hash].[ext]&mimetype=application/octet-stream'},
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=public/fonts/[name].[hash].[ext]'},
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=public/images/[name].[hash].[ext]&mimetype=image/svg+xml' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};