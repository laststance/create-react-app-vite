import '@unocss/reset/tailwind.css'
import ReactDOM from 'react-dom'

import 'uno.css'
import App from './App'
import './index.css'

// @ts-ignore v18 @types not coming yet
const root = ReactDOM.createRoot(document.querySelector('#root'))

if (process.env.NODE_ENV === 'development') {
    import('../mocks/browser')
        .then(({ worker }) => {
            worker.start()
        })
        .then(() => {
            root.render(<App />)
        })
} else root.render(<App />)
