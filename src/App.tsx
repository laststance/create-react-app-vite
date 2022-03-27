import axios from 'axios'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import './App.scss'
import logo from './logo.svg'

type Docs = { name: string; url: string }
type DocsList = Docs[]

const App: FC = () => {
    const [count, setCount] = useState(0)
    const [docsList, setDocsList] = useState<DocsList>([])

    useEffect(() => {
        axios
            .get('./docs_list')
            .then(({ data }: { data: any }) => {
                setDocsList(data)
            })
            .catch()
    }, [])

    return (
        <main className='text-center'>
            <header
                className='flex flex-col min-h-screen bg-[#282c34] text-white items-center justify-center'
                style={{
                    fontSize: 'calc(10px + 2vmin)',
                }}
            >
                <img
                    className='h-[40vmin] App-logo pointer-events-none'
                    src={logo}
                    alt='logo'
                />
                <p>Hello Vite + React!</p>
                <p>
                    <button
                        className='border border-white border-solid rounded h-26 my-4 py-3 px-4 w-52'
                        style={{
                            fontSize: 'calc(10px + 2vmin)',
                        }}
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
                        className='text-[#61dafb]'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className='text-[#61dafb]'
                        href='https://vitejs.dev/guide/features.html'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Vite Docs
                    </a>
                    {docsList.length
                        ? docsList.map((v, i) => {
                              return (
                                  <span key={i}>
                                      {' | '}
                                      <a
                                          className='text-[#61dafb]'
                                          href={v.url}
                                          target='_blank'
                                          rel='noopener noreferrer'
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
