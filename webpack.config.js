const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/scripts/app/index.js'),
        products: path.resolve(__dirname, 'src/scripts/app/products.js'),
        login: path.resolve(__dirname, 'src/scripts/app/login.js'),
        signup: path.resolve(__dirname, 'src/scripts/app/signup.js'),
    },
    output:{
        path: path.resolve(__dirname, 'dist/build'),
        filename: 'scripts/[name][contenthash].js',
        clean: true,
        assetModuleFilename: 'static/images/[name][ext]',
        
    },
    devtool:'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(png|svg|jpeg|jpg|gif|webp)$/i,
                type:'asset/resource',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Sabka Bazaar',
            filename: 'index.html',
            template: 'src/templates/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin(
            {
                title: 'Product Listing Page',
                filename: 'products.html',
                template: 'src/templates/products.html',
                chunks: ['products' ],
                
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'Login',
                filename: 'login.html',
                template: 'src/templates/login.html',
                chunks: ['login'],
            }
        ),
        new HtmlWebpackPlugin(
            {
                title: 'SignUp',
                filename: 'signup.html',
                template: 'src/templates/signup.html',
                chunks: ['signup'],
            }
        ),
       
    ]
}