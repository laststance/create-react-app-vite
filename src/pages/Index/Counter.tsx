import React, { memo, useState } from 'react'

import styles from './Counter.module.css'

interface Props {}

const Counter: React.FC<Props> = memo(() => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className={styles.button}
      >
        count is: {count}
      </button>
    </>
  )
})
Counter.displayName = 'Counter'

export default Counter
