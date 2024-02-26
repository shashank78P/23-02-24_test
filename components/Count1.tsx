import React , { useMemo , useState } from 'react'

const Count1 = ({ count1, setCount1 }: { count1: number, setCount1: Function }) => {
    const [num1 , setNum1] = useState<number[]>([1,2,3])
    const [num2 , setNum2] = useState<number[]>([1,2,3])

    const memorization = (num1 :number[] , num2 : number[])=>{
        let sum =0;
        console.log("memorization fun... called")
        for(let i=0; i<num1.length; i++){
            sum+= num1[i] + num2[i]
        }
        return sum;

    }
    const memoValue = useMemo(()=>{ return memorization(num1 , num2) }, [num1 , num2])

    console.log("Count 1")
    return (
        <div>
            <h1>{count1}</h1>
            <button onClick={() => {
                setCount1((prev: number) => prev + 1)
            }}>Count1</button>

            <input type="number" placeholder='num 1' name="" id="" onChange={(e:any)=>{
                setNum1(e.target.value)
            }} />

            <input type="number" name="" id="" placeholder='num 2' onChange={(e:any)=>{
                setNum2(e.target.value)
            }} />
            <h1>value : {memoValue} </h1>
        </div>
    )
}

export default React.memo(Count1)
