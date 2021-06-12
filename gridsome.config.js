// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const merge = require('merge');

module.exports = {
  siteName: 'blog',
  siteUrl: 'https://yolilufei.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blogs/*.md',
        typeName: 'BlogPost',
        remark: {
          // remark options
        }
      }
    }
  ],
  configWebpack(config) {
    merge(config, {
      output: {
        path: require.resolve(__dirname, 'docs')
      }
    })
  }
}
