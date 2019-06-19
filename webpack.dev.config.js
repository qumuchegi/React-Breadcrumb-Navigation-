const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 

module.exports = {
    mode:'development',
    entry:{
        main: './test/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'Dev-dist'),
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
                include:[path.resolve(__dirname,'test'),path.resolve(__dirname,'src')],
                exclude:path.resolve(__dirname,'node_modules'),
                use:[

                   'style-loader',
                   /* {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it uses publicPath in webpackOptions.output
                          publicPath: path.resolve(__dirname,'Dev-dist'),
                          filename:  '[name].[hash].css',
                          hmr: process.env.NODE_ENV === 'development',
                        },
                      },
                    */
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./test/index.html",
            filename: "index.html"
        })
         
    ],
    watch:true,
    watchOptions: {
        aggregateTimeout: 100,
        poll: 200,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.resolve(__dirname, "Dev-dist"),
        compress: true,
        port: 8033,
        host: "127.0.0.1",
        hot: true
    },
    devtool:'source-map'
}
//)