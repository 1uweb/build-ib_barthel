const pkg = require('./package')

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
      { rel: 'icon', type: 'image/x-icon', href: '/build/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#002af8',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/dev/main.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
  ],

  /*
  ** Fontloader
  */
  webfontloader: {
    google: {
      families: ['Sarabun:300,400,500,600,700']
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
