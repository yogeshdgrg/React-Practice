import { useEffect, useState } from "react"

const Videos = () => {
  const [count, setCount] = useState(0)

  console.log("State state value : ",count)

  useEffect(()=>{
    console.log("I am useEffect with dependent array...")
  },[count])

  useEffect(()=>{
    console.log("I render at first...")
  },[])

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {
        console.log("I am inside return")
      }
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default Videos
