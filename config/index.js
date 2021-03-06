'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static', // 静态资源文件夹
    assetsPublicPath: '/',  // 发布路径
    proxyTable: { //vue-cli提供的解决vue开发环境下跨域问题的方法，http代理中间件，依赖node.js，基本原理是用服务端代理解决浏览器跨域：（fix：做技术分享时大佬们说这不是跨域，本地跑不存在，哈哈）
      '/api': {  // 要代理的路径前缀
        target: 'https://m.ttyingqiu.com/',//设置你调用的接口域名
        changeOrigin: true,   //开启代理
        secure: false,      // 如果是https接口，需要配置这个参数  划重点
        pathRewrite: {  
          '^/api': '/api'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://m.kugou.com/rank/info/?rankid=23784&page=1&json=true'，直接写‘/api/rank/info/?rankid=23784&page=1&json=true’即可  
        }  
      },
      '/test': {  
        target: 'https://kaijiang.aicai.com',
        changeOrigin: true,
        secure: false,      // 如果是https接口，需要配置这个参数  划重点    是否启用安全访问限制
        // ws:true,
        pathRewrite: {  
          '^/test': ''//这里理解成用‘/test’代替target里面的地址，后面组件中我们掉接口时直接用test代替 
        }  
      },
      '/yaq': {  
        target: 'http://localhost:8081/',
        changeOrigin: true,
        // secure: false,
        // ws:true,
        pathRewrite: {  
          '^/yaq': ''//这里理解成用‘/yaq’代替target里面的地址，后面组件中我们掉接口时直接用yaq代替
        }  
      }    
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
