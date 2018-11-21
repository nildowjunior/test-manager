const HtmlWebPackPlugin = require("html-webpack-plugin");

//This plugin generates an HTML file with <script> injected, writes this to dist/index.html, and minifies the file.
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            }
        ],
    },
    plugins: [htmlPlugin]
};