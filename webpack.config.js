var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: { path: __dirname, filename: 'bundle.js' },
    devServer: {
        inline:true,
        port: 1337
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({ minimize: false, compress: { warnings: false } })
    ]
};
