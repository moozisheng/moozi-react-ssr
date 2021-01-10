module.exports = {
    module: {
        rules: [
            { 
                test:/\.js$/,
                // 才能支持import 支持jsx
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                  presets:['@babel/preset-react', ['@babel/preset-env']]
                }
            },
        ]
    }
}