import { rest } from 'msw'

export const handlers = [
    rest.get('/docs_list', (req, res, ctx) => {
        const data = [
            { name: 'Axios', url: 'https://axios-http.com/' },
            { name: 'MSW', url: 'https://mswjs.io/' },
            { name: 'UnoCSS', url: 'https://unocss.antfu.me/' },
        ]
        return res(ctx.status(200), ctx.json(data))
    }),
]
