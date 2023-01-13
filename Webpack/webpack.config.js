const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCSSExtractPlugin = require ('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const devServer = require('webpack-dev-server')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: '/public',
        port: 9000
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "estilo.css"
        })
    ],    
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{ 
            test: /\.s?[ac]ss$/,
            use: [
                MiniCSSExtractPlugin.loader,
               //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // Interpreta @import, url()...
                'sass-loader',
            ]          
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}