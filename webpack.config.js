const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");




module.exports = {
    mode:"development",
    entry:{
        bundle:path.resolve(__dirname,"src/js/index.js"),
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
    },
    devtool:'source-map',
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },    
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },

        ]
    },
    plugins:[
        new HTMLWebPackPlugin({
            title:"Web App",
            filename:"index.html",
            template:"src/template.html",
            inject:'body',
        }),
    ],
}