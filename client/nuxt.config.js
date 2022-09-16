module.exports = {
    build: {
        build: {
            analyze: {
                analyzerMode: 'static'
            }
        },
        generate: {
            fallback: true
        },
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true
            }
        },
        filenames: {
            app: ({
                      isDev,
                      isModern
                  }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
            chunk: ({
                        isDev,
                        isModern
                    }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
            css: ({isDev}) => isDev ? '[name].css' : 'css/[contenthash:7].css',
            img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
            font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
            video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
        }
    },
    serverMiddleware: [
        '~/server-middleware/headers.js'
    ],

    publicRuntimeConfig: {
        siteKey: process.env.SITEKEY,
        secretKey: process.env.SECRETKEY,
        liffId: process.env.LIFFID,
        liffIdTs: process.env.LIFFID_TIMESTAMP,
        basicAuthUsername: process.env.BASIC_AUTH_USERNAME,
        basicAuthPassword: process.env.BASIC_AUTH_PASSWORD
    },

    server: {
        host: process.env.NUXT_HOST,
        port: process.env.NUXT_PORT
    },

    ssr: false,

    head: {
        titleTemplate: 'Exkasan',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Meta description'},
        ],

        script: [
            {
                src: 'https://accounts.google.com/gsi/client'
            },
            {
                src: 'https://www.google.com/recaptcha/api.js',
                async: true,
                defer: true
            },
            {
                scr: 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit',
                async: true,
                defer: true
            },
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-71TY1V8321",
                async: true
            },
            {
                src: 'https://cdn.tailwindcss.com'
            }
        ],

        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
                crossorigin: 'anonymous'
            },
            {
                rel: 'icon',
                type: 'image/png',
                href: '/icon-head.png'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@400&display=swap'
            }
        ]
    },

    plugins: [
        '~/plugins/notifier.js'
    ],

    buildModules: [
        "@nuxtjs/vuetify",
        "@nuxtjs/composition-api/module"
    ],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'bootstrap-vue/nuxt',
        'vue-sweetalert2/nuxt',
        [
            '@nuxtjs/recaptcha',
            {
                siteKey: process.env.SITEKEY,
                language: 'en',
                version: 2
            }
        ],
        '@nuxtjs/gtm',
    ],

    auth: {
        strategies: {
            cookie: {
                cookie: {
                    name: 'fastapi-csrf-token'
                },
                endpoints: {
                    csrf: {
                        url: `/timestamp/auth/csrftoken`
                    }
                }
            },
            google: {
                clientId: process.env.CLIENT_ID_GOOGLE,
                scope: ['profile', 'email'],
                codeChallengeMethod: '',
                responseType: 'token id_token',
                redirectUri: process.env.REDIRECT_URI
            },
        },
        redirect: {
            callback: '/timestamp',
            logout: '/timestamp',
        }
    },

    gtm: {
        id: 'GTM-71TY1V8321'
    },

    srcDir: 'app/',
    components: true,

    axios: {
        proxy: true,
    },
    proxy: {
        '/captcha-api/': {
            target: 'https://www.google.com/recaptcha/api',
            pathRewrite: {
                '^/captcha-api': ""
            }
        },
        '/timestamp/': process.env.BASE_URL_BACKEND,
    }

}