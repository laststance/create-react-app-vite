import React, { memo, useState } from 'react'

interface Props {}

const Counter: React.FC<Props> = memo(() => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="h-26 my-4 w-52 rounded-sm border border-solid border-white px-4 py-3 hover:bg-blue-200"
      >
        count is: {count}
      </button>
    </>
  )
})
Counter.displayName = 'Counter'

export default Counter
