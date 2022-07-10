import React, { useState } from 'react'

const Counter = (): React.ReactElement => {
  const [counter, updateCounter] = useState(0)
  return (
    <>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={e => updateCounter(counter - 1)}>-</button>
        <button onClick={e => updateCounter(counter + 1)}>+</button>
      </div>
    </>
  )
}

export default Counter
