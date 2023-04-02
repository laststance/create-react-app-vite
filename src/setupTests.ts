import matchers from '@testing-library/jest-dom/matchers'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

import { server } from '../mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
