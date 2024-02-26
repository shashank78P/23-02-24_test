"use client"
import Home from '@/components/Nav'
import React, { useEffect, useRef, useState } from 'react'
import Count1 from '@/components/Count1'
import Count2 from '@/components/Count2'

const page = () => {

  const [count1, setCount1] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)
  
  return (
    <div>
      <Count1 count1={count1} setCount1={setCount1} />
      <Count2 count2={count2} setCount2={setCount2} />
      <Home />
    </div>
  )
}

export default page
