var path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: 
    {
        react: [
            'react',
            'redux',
            'react-dom',
        ],
        reactLibrary: [
            'redux-saga',
            'react-router',
        ],
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/",
        library: '[name]',
    },
	plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname,"dist","[name]-manifest.json"),
            name: '[name]'
        }),
	]
};