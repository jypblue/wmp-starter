module.exports = {
  alias: {
    '@': 'src',
    'utils': 'src/utils',
    'assets': 'src/assets',
    'components': 'src/components',
    'styles': 'src/styles',
    'pages': 'src/pages',
    'wxs': 'src/wxs',
    'wxml': 'src/wxml',
  },
  copyWebpack: [
    'sitemap.json',
    'custom-tab-bar'
  ],
  build: {
    env: require('./prod.env')
  },
  dev: {
    env: require('./dev.env')
  }
};
