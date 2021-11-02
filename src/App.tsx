import React, { useState, useEffect } from 'react'

import logo from './logo.svg'
import './App.css'

interface State {
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState<State['count']>(0)
  useEffect(() => {}, [])

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            increment
          </button>
        </p>
        <p>count is: {count}</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </main>
  )
}

export default App
