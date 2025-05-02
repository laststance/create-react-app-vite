import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// Setup MSW mock server in both development and production
// Certify MSW's Service Worker is available before starting React app
import('../mocks/browser')
  .then(async ({ worker }) => {
    return worker.start()
  }) // Run <App /> when Service Worker is ready to intercept requests
  .then(() => {
    root.render(<App />)
  })
