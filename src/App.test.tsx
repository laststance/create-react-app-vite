import { waitFor } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import App from './App'

test('Show App Component', () => {
  render(<App />)

  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
})

test('Working Counter', async () => {
  const user = userEvent.setup()
  const { getByText } = render(<App />)
  expect(getByText('count is: 0')).toBeInTheDocument()

  const button = getByText(/count is: \d/)

  await user.click(button)
  expect(getByText('count is: 1')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 2')).toBeInTheDocument()

  await user.click(button)
  expect(getByText('count is: 3')).toBeInTheDocument()
})

test('working msw', async () => {
  render(<App />)
  await waitFor(() => {
    expect(screen.getByText('Axios')).toBeInTheDocument()
    expect(screen.getByText('MSW')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })
})
