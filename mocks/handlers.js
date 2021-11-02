import { rest } from 'msw'

export const handlers = [
  rest.get('/docs', (req, res, ctx) => {
    return res(ctx.body())
  }),
]
