import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/api/docs_list', (req, res, ctx) => {
    const data = [
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    return res(ctx.status(200), ctx.json(data))
  }),
]
