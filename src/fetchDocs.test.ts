import axios from 'axios'

test('fetch docs', async () => {
  const response = await axios.get('/docs_list')
  expect(response.data).toEqual(['Axios', 'https://axios-http.com/]'])
})
