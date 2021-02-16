import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const clickFn = () => {
    setCount(count + 1)
  }

  const clickFn2 = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>THIS IS TANSEN vut</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Sit distinctio placeat aliquid enim autem voluptate amet
         praesentium vitae skdjfaskdjfask jdaskjfskjdfk dolore</p>

      <button onClick={clickFn}>+</button>

      <button onClick={clickFn2}>-</button>
      <br />
      {count}
      <br />
      <br />
    </div>
  )
}

export default App

