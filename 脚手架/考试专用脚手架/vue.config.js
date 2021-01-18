const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  devServer: {
    open: false,//是否自动弹出浏览器页面
    host: "localhost",//表示启动的时候使用的域名  默认可以不写，使用的是localhost和本级ip地址
    port: "8080",
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://120.53.31.103:84/api/app/', // 源地址
        changeOrigin: true, // 改变源
        pathRewrite: {
          '^/api': '' // 路径重写
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
};