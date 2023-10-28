import React, { memo, Suspense } from 'react'

import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout/Layout'
import Spinner from './components/Spinner'
import Routes from './Routes'

const App: React.FC = memo(() => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner size="xl" />}>
      <Layout>
        <Routes />
      </Layout>
    </Suspense>
  </ErrorBoundary>
))

App.displayName = 'App'
export default App
