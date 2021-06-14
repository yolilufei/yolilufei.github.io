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
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://106.75.222.146:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['Posts'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          // identifier: 'guoshi@163.com',
          // password: 'Shizhongyu007*'
        }
      }
    }
  ],
  templates: {
    StrapiPosts: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ]
  }
}
