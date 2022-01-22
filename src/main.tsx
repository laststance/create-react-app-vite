import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'

const runReact = () => {
  // @ts-ignore v18 @types coming not yet
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
}

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => runReact())
} else {
  runReact()
}
