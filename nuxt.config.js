const globImporter = require('node-sass-glob-importer');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'howto',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/myPlugin.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],


  styleResources: {
    sass: "./assets/styles/imports/*.sass"
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    proxy: true
  },

  proxy: {
    '/api/': {
      // Switch between [::1] and localhost if it doesn't work and modify the port if needed
      // target: 'http://localhost:8181',
      target: 'http://[::1]:8181',
      pathRewrite: {'^/api/': '/'},
      changeOrigin: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config,{loaders: {sass}}) {
      const sassOptions = sass.sassOptions || {};
      sassOptions.importer = globImporter();
      sass.sassOptions = sassOptions;
    }
  },

  router: {
    middleware: ['landing']
  }
}
