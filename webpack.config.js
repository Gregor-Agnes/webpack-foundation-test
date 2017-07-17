const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './main.js',

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],

    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    },

    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};