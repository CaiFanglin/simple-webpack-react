var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/js/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: "eval-source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.js|jsx$/,
                loader: ['react-hot-loader', 'babel-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'haha'
        })
    ]
}
