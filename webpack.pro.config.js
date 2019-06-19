const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'src/index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'lib'),
        library:'react-breadcrumb-nav',
        libraryTarget:'commonjs2'
    },
    module:{
        rules:[
            {
                test:/\.(js)|(jsx)$/,
                include:[path.resolve(__dirname,'test'),path.resolve(__dirname,'src')],
                exclude:path.resolve(__dirname,'node_modules'),
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                include:path.resolve(__dirname,'src'),
                exclude:path.resolve(__dirname,'node_modules'),
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it uses publicPath in webpackOptions.output
                          publicPath: path.resolve(__dirname,'Dev-dist'),
                          filename:  '[name].[hash].css',
                          hmr: process.env.NODE_ENV === 'development',
                        },
                      },
                      'css-loader',
                ]
            },
            {
                test:/.(png|jpeg|gif|jpg)/i,
                include:[path.resolve(__dirname,'test'),path.resolve(__dirname,'src')],
                exclude:path.resolve(__dirname,'node_modules'),
                use:[
                    'url-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
         
         
    ],
    externals:['react','react-dom']
}