const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },    
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify("dev")
        }),
        new ReactRefreshWebpackPlugin(),
        new BundleAnalyzerPugin(),
    ]
}
