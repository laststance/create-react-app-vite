import axios from 'axios'
import React, { useEffect, useState } from 'react'

import logo from './logo.svg'

import './App.css'

type DocsList = Array<{ name: string; url: string }>

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [docsList, setDocsList] = useState<DocsList>([])

  useEffect(() => {
    axios
      .get('./docs_list')
      .then(({ data }) => {
        setDocsList(data)
      })
      .catch()
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
            onClick={() => setCount(count + 1)}
          >
            count is: {count}
          </button>
        </p>
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
          {docsList.length
            ? docsList.map((v, i) => {
                return (
                  <span key={i}>
                    {' | '}
                    <a
                      className="App-link"
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {v.name}
                    </a>
                  </span>
                )
              })
            : false}
        </p>
      </header>
    </main>
  )
}

export default App
