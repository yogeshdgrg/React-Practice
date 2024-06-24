// import React from 'react'
import { useState } from "react"

const Todo = () => {
    const [first, setfirst] = useState('')
    const handleText = (event) =>{
        setfirst(event.target.value)
    }
  return (
    <>
        <input onChange={handleText} type="text" placeholder='Enter something' />
        <h3>User is typing: {first}</h3>
    </>
  )
}

export default Todo