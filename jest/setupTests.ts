import '@testing-library/jest-dom'

// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'
import { server } from '../mocks/server'

// eslint-disable-next-line no-console
const originalError = console.error
beforeAll(() => {
  server.listen()

  // eslint-disable-next-line no-console
  console.error = (...args) => {
    // Suppress jest error msg
    if (
      args[0].includes('ReactDOM.render is no longer supported in React 18.')
    ) {
      return
    }

    originalError.call(console, ...args)
  }
})

beforeAll(() => {
  server.resetHandlers()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()

  // eslint-disable-next-line no-console
  console.error = originalError
})
