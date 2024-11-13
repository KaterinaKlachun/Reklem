// vue.config.js
const webpack = require('webpack'); // Добавляем импорт webpack

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      })
    ]
  }
}