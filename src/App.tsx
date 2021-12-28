import axios from 'axios'
import React, { useEffect, useState } from 'react'

import logo from './logo.svg'

import './App.css'

interface State {
  count: number
  axiosDocs: string[]
}

const App: React.FC = () => {
  const [state, setState] = useState<State>({ count: 0, axiosDocs: [] })

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('./docs_list')
        .then((response) => {
          setState(({ count }) => {
            return { axiosDocs: response.data, count }
          })
        })
        .catch()
    }, 5000)
  }, [])

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className="h-26 w-52 px-4 py-3 my-4 border border-white border-solid rounded"
            onClick={() =>
              setState(({ count, ...rest }) => {
                return {
                  count: count + 1,
                  ...rest,
                }
              })
            }
          >
            count is: {state.count}
          </button>
        </p>
        {state.axiosDocs.length
          ? `${state.axiosDocs[0]}: ${state.axiosDocs[1]}`
          : 'loading...'}
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p></p>
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
