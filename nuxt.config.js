require('dotenv').config()

export default {
  // target: 'static',
  // ssr: false,
  head: {
    title: 'starter',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    "~/plugins/o-script.js",
    "~/plugins/vuelidate.js",
    "~/plugins/axios.js",
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    "@nuxtjs/dotenv",
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: 86400,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: false
        },
        endpoints: {
          login  : { url: '/login/auth', method: 'post', propertyName: 'token' },
          user   :{ url: '/profile', method: 'get', propertyName: 'data' },
          logout : false,
        },
      },
      auth0: {
        domain: 'ozhora.us.auth0.com',
        clientId: 'cMuuhnUo9jPZnu6M89JCQuqmwenkWRvH',
        // audience: 'http://localhost:8000',
        // responseType: 'code',
        // grantType: 'authorization_code',
        // audience: 'https://ozhora.us.auth0.com/api/v2/',
        // scope: ['openid', 'profile', 'offline_access'],
        // accessType: 'offline',
        // responseType: 'code',
        // grantType: 'authorization_code',
        // codeChallengeMethod: 'S256',
      }
    }
  },

  axios: {
    baseURL: process.env.API_HOST,
  },

  build: {
    styleResources: {
      scss: ['./assets/scss/*.scss']
    },
  },

}
