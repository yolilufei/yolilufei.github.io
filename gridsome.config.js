// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const merge = require('webpack-merge');
const path = require('path');

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
    // config.output.path = path.resolve(__dirname, 'docs');
    // console.log(config);
    return merge({
      output: {
        path: path.resolve(__dirname, 'docs')
      }
    }, config)
  }
}
