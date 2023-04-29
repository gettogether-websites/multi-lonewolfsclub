// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {

    },
    css: [
        '@/assets/scss/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
                },
            },
        },
    },
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: process.env.BACKEND_URL
            }
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
