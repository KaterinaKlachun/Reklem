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

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,  // Убирает консольные сообщения для уменьшения размера кода
              drop_debugger: true, // Убирает команды debugger
            },
          },
        }),
      ],
    };
  },
};
