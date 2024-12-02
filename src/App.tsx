import React from 'react'
import { RouterProvider } from 'react-router'

import ErrorBoundary from './components/ErrorBoundary'
import router from './router'

const App: React.FC = () => (
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
)
App.displayName = 'App'
export default App
