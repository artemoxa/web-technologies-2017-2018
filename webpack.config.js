const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: ["./index.js","./node_modules/lodash/lodash.js"],
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    devtool: 'source-map',
	mode: 'development'
}