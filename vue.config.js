'use strict'

const port = process.env.port || process.env.npm_config_port || 8080   //端口

module.exports = {

  publicPath: process.env.NODE_ENV ==="production"?"/":"/",
  devServer: {
    host: '0.0.0.0',
    port: port,
    //跨域相关配置
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:'http://127.0.0.1:8000',
        changeOrigin:true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:'/api'
        }
      }
    },
    //disableHostChect:true
  }
}
