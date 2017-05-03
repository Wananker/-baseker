var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: path.join(__dirname, 'src'),
        vendors: []
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/static/",
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['react', 'es2015']}}
        ]
    }
};