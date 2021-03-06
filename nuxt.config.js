const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:"180x180", href:"~/apple-touch-icon.png" },
      { rel: 'icon', type:"image/png", sizes:"32x32", href:"~/favicon-32x32.png" },
      { rel: 'icon', type:"image/png", sizes:"16x16", href:"~/favicon-16x16.png" },
      { rel: 'manifest', href:"~/site.webmanifest" },
      { rel: 'mask-icon', href:'~/safari-pinned-tab.svg' ,color:'#5bbad5' },
      { name: 'msapplication-TileColor', content:'#da532c' },
      { name: 'theme-color', content:'#ffffff' },
      { rel: 'icon', type: 'image/x-icon', href: '~/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' }
      
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF69B4' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    'assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    ['storyblok-nuxt', {accessToken: process.env.ACCESS_TOKEN, cacheProvider: "memory" }],
    '@nuxtjs/font-awesome'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
//  buildDir: '../functions/.nuxt',
  build: {
    publicPath:"/.nuxt/dist/",
    vendor: ['~/plugins/index.js', '~/plugins/vuetify'],
    extractCSS: true,
    babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        ["transform-runtime", {
          "polyfill": true,
          "regenerator": true
        }]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
