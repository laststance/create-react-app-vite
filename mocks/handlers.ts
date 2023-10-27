import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:3000/api/docs_list', async () => {
    const data = [
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    return HttpResponse.json(data)
  }),
]
