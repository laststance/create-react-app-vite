import { http, HttpResponse } from 'msw'

const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const handlers = [
  http.get('http://localhost:3000/api/doclist', async () => {
    const data: DocList = [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'Vite', url: 'https://vitejs.dev/' },
      {
        name: 'React Router',
        url: 'https://reactrouter.com/en/main/start/overview',
      },
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    await sleep(2000)

    return HttpResponse.json(data)
  }),
]
