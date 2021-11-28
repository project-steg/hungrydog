export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '株式会社Hungry Dog',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Hungry Dogはインフルエンサーを軸としたSNSマーケティングに特化したWEBマーケティング会社です。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '株式会社Hungry Dog 公式ホームページ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '株式会社Hungry Dog 公式ホームページ' },
      { hid: 'og:description', property: 'og:description', content: 'Hungry Dogはインフルエンサーを軸としたSNSマーケティングに特化したWEBマーケティング会社です。' },
      { hid: 'og:image', property: 'og:image', content: 'https://hungrydog.pages.dev/ogp.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css'
  ],

  styleResources: {
    scss: ['@/assets/scss/variable.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dayjs',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  dayjs: {
    locales: ['ja'],
    defaultLocale: 'ja',
    defaultTimeZone: 'Asia/Tokyo',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL
  }
}
