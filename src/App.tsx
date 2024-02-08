import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary'
import router from './router'

const App: React.FC = memo(() => (
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
))
App.displayName = 'App'
export default App
