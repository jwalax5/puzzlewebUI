const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: { 
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js',

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            "@babel/preset-env", 
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ],
                    }
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './src')
        },
        port: 9000,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
            ]
        })
    ]
};