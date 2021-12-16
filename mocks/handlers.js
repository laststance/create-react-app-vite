import { rest } from 'msw'

export const handlers = [
  rest.get('/docs_list', (req, res, ctx) => {
    const data = [['Axios', 'https://axios-http.com/]']]

    return res(ctx.json(data))
  }),
]
