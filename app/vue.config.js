const path = require('path')
const webpack = require('webpack')

// 拼接路径
function resolve (dir) {
    return path.join(__dirname, dir)
}

// 基础路径 注意发布到生产环境之前要先修改这里
const isProd = process.env.NODE_ENV === 'production'
const baseUrl = isProd ? process.env.VUE_APP_BASEURL : '/'

module.exports = {
    publicPath: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    configureWebpack: { // 引入jquery
        externals: { // 引入百度地圖
            'BMap': 'BMap'
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            })
        ]
    },
    devServer: {
        publicPath: baseUrl, // 和 baseUrl 保持一致
        // 代理设置
        proxy: {
            // 网关入口
            // 示例：访问key为info-manage的服务接口，请访问“/service/info-manage”
            '/service': {
                target: 'http://10.4.106.7:8089',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/service': ''
                }
            },
            /* '/master': {
                target: 'http://10.4.106.5:8089',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/master': '' }
            }, */
            '/master': {
                target: 'http://10.4.138.221:8089',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/master': '' }
            }
        }
    },
    // webpack 设置
    // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
    chainWebpack: config => {
        // svg
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .include
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'd2-[name]'
            })
            .end()
        // image exclude
        const imagesRule = config.module.rule('images')
        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
        // 重新设置 alias
        config.resolve.alias
            .set('@', resolve('src'))
        // babel-polyfill 加入 entry
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
    }
}
