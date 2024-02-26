import React from 'react'

const Count2 = ({ count2, setCount2 }: { count2: number, setCount2: Function }) => {
    console.log("Count 2")
    return (
        <div>
            <h1>{count2}</h1>
            <button onClick={() => {
                setCount2((prev: number) => prev + 1)
            }}>Count2</button>
        </div>
    )
}

export default React.memo(Count2)
