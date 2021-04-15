const ROUTES = [
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/paid',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/paid`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;
