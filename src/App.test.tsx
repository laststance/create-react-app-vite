import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'

import App from './App'

test('Show App Component', () => {
  render(<App />)

  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
})

test('Working Counter', () => {
  const { getByText } = render(<App />)
  expect(getByText('count is: 0')).toBeInTheDocument()

  const button = getByText(/count is: \d/)

  act(() => userEvent.click(button))
  expect(getByText('count is: 1')).toBeInTheDocument()

  act(() => userEvent.click(button))
  expect(getByText('count is: 2')).toBeInTheDocument()

  act(() => userEvent.click(button))
  expect(getByText('count is: 3')).toBeInTheDocument()
})
