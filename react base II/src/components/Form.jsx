// import React from 'react'

import { useState } from "react"

const Form = () => {
    const [todos,setTodos] = useState([])

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        console.log("Event Value : ",event.target.value) //* Gives undefined as output
        console.log("Event title value : ",event.target.title.value) //* Gives the final output of an input...
        let temp = [...todos]
        temp.push(event.target.title.value)
        setTodos(temp)
        console.log("Form Submitted...")
    }


  return (
    <>
        <form action="" onSubmit={handleFormSubmit} >
            <input type="text" name="title" />
            <button>Submit</button>
        </form>

        {
            todos.map((todo,index)=>{
                return <li key={index} >{todo}</li>
            })
        }
    </>
  )
}

export default Form