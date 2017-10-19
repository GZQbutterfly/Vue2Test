let webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    sourcePath = __dirname;
// ==>
module.exports = {
    devtool: 'source-map',
    entry: [path.join(sourcePath, 'src/main.ts')],
    output: {
        path: path.join(sourcePath, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.ts$/,
            use: 'ts-loader'
        },
        {
            test: /\.js$/,
            use: 'babel-loader'
        },{
            test: /\.(html|htm)$/,
            use: 'raw-loader'
        }, {
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'vue$': path.resolve(__dirname,'node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     Vue: "vue/dist/vue.common.js"
        // }),
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, 'src/index.tpl.html'),
            inject: 'body',
            favicon: path.join(sourcePath, 'src/favicon.ico')
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true,
        }),
        // new CopyWebpackPlugin([{
        //     from: path.join(sourcePath, '/src/app/assets'),
        //     to: path.join(sourcePath, '/dist/app/assets')
        // }]),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
