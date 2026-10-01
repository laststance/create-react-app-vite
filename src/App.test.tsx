import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import React from 'react'

import { server } from '../mocks/server'

import App from './App'

test('Work App Component without error', () => {
  render(<App />)

  expect(screen.getByText("I'm REACT_APP_TEXT from .env")).toBeInTheDocument()
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

test('working with msw', async () => {
  render(<App />)

  await waitFor(
    () => {
      expect(screen.getByText('MSW')).toBeInTheDocument()
      expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
    },
    { timeout: 5000 },
  )
})

test('shows an error when loading the document list fails', async () => {
  server.use(
    http.get(
      'http://localhost:3000/api/doclist',
      () => new HttpResponse(null, { status: 500 }),
    ),
  )

  render(<App />)

  expect(await screen.findByRole('alert')).toHaveTextContent(
    'Unable to load the document list.',
  )
})

test('shows an empty state when the document list has no entries', async () => {
  server.use(
    http.get('http://localhost:3000/api/doclist', () => HttpResponse.json([])),
  )

  render(<App />)

  expect(await screen.findByText('No documents available.')).toBeInTheDocument()
  expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
})
