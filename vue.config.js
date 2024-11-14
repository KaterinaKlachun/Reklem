const webpack = require('webpack'); // Импортируем webpack
const TerserPlugin = require('terser-webpack-plugin'); // Импортируем TerserPlugin

module.exports = {
  // Установка глобальных флагов для Vue
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true), // Применяем флаг для Vue
      }),
    ],
    optimization: {
      minimize: true, // Минимизируем код
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Убираем все console.logs для уменьшения размера
              drop_debugger: true, // Убираем команды debugger
            },
          },
        }),
      ],
    },
  },
};
