const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        home: './src/scripts/home.js'
    },
    output: {
        path: __dirname + '/src/dist',
        filename: 'assets/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/img'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(hbs|html)$/,
                use: ['handlebars-loader', 'extract-loader', 'html-loader']
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/site/home.html'})]
};
