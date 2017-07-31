const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './main.js',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({ // define where to save the file
            filename: 'main.css',
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })

    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                //exclude: /(readmore.js)/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=/Fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"

                },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: "style-loader"

                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: [
                                // path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets'),
                            ]
                        }
                    },
                ],
            }
        ]
    },

    devServer: {
        host: 'localhost',
        port: 80,
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
}
;