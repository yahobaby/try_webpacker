const { environment } = require('@rails/webpacker')

// webpackの設定ファイルで、jQueryを管理下に追加するための記述！ここから
const webpack = require('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
  })
)
// ！ここまで

module.exports = environment
