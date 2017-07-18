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
        })

],

    output: {
        filename: 'bundle.js',
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders:  1,
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
                })
            }
            ]
    },

    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}
;