// Temp.js
import React, { useCallback, useEffect, useState } from 'react';
const tempSet = new Set()

const Temp = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)


  const fun = useCallback(() => {
    console.log(count)
  }, [count])

  console.log("Before adding: ", tempSet)
  tempSet.add(fun)

  console.log("After adding: ", tempSet)

  return <>
    <div>React Component</div>
    <button className='border rounded-lg px-5 py-2 mr-3'
      onClick={() => {
        setCount((prev: number) => prev + 1)
      }}
    >Counter 1</button>
    <button className='border rounded-lg px-5 py-2'
      onClick={() => {
        setCount2((prev: number) => prev + 1)
      }}
    >Counter 2</button>
    <br />
    <h1>Count: {count}</h1>
  </>
};

export default Temp;
