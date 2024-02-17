// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    /*
    css: [
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/slick.css',
        '~/assets/css/slick-theme.css',
        '~/assets/css/base.css',
        '~/assets/css/plugins.css',
        '~/assets/css/style.css'
    ]*/
})
